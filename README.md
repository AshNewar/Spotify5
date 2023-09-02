# Musi5
A personalized music player integrated with API which gives you song recommendations based on prior song history and questionnaire for new users, made by Hall 5.

### How to use
Answer few questions about your taste in music and get recommended songs to your taste.

You can also see top charts and artists through the top charts page in the application.

### Endpoints of the API used
`Shazam` API has been used for this application due to its versatility and usage.
- `https://shazam.p.rapidapi.com/songs/list-recommendations` : This endpoint is used to get recommendations of songs based on the song history of the user or the user's taste in music.
- `https://shazam.p.rapidapi.com/songs/get-details` : This endpoint is used to get the details of the song like the artist, album, genre, etc.
- `https://shazam.p.rapidapi.com/songs/search` : This endpoint is used to search for a song with the name of the song and the artist.
- `https://shazam.p.rapidapi.com/charts/track` : This endpoint is used to get the top tracks.

