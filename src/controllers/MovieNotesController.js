const knex = require("../database/knex")

class MovieNotesController {
    async create(request, response) {
        const { title, description, rating, movie_tags } = request.body;
        const user_id  = request.user.id;

        const note_id = await knex("movie_notes").insert({
            title,
            description,
            rating,
            user_id
        });

        const movieTagsInsert = movie_tags.map(name => {
            return {
                user_id,
                note_id,
                name
            }
        })
        await knex("movie_tags").insert(movieTagsInsert);

        return response.json();
    }

    async show(request, response) {
        const { id } = request.params;

        const movieNote = await knex("movie_notes").where({ id }).first();
        const movietags = await knex("movie_tags").where({ note_id: id }).orderBy("name");

        return response.json({...movieNote, movietags });
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("movie_notes").where({ id }).delete();
    
       return response.json();
    }

    async index(request, response) {
        const { title, movie_tags } = request.query;
        const user_id = request.user.id;

        let movieNotes
        
        if(movie_tags) {
            const filterMovieTags = movie_tags.split(',').map(tag => tag.trim());
            
            movieNotes = await knex("movie_tags")
            .select([
                "movie_notes.id",
                "movie_notes.title",
                "movie_notes.description",
                "movie_notes.rating",
                "movie_notes.user_id"
            ])
            .where("movie_notes.user_id", user_id)
            .whereLike("movie_notes.title", `%${title}%`)
            .whereIn("name", filterMovieTags)
            .innerJoin("movie_notes", "movie_notes.id", "movie_tags.note_id")
            .orderBy("title")
        }else{
            movieNotes = await knex("movie_notes")
            .where({ user_id })
            .whereLike("title", `%${title}%`)
            .orderBy("title");
        }
        
        const userMovieTags = await knex("movie_tags").where({ user_id });
        const notesWithTags = movieNotes.map(note => {
            const noteTags = userMovieTags.filter(tag => tag.note_id === note.id);

            return {
                ...note,
                movie_tags: noteTags
            }
        })


        return response.json(notesWithTags);
    }
}
module.exports = MovieNotesController;