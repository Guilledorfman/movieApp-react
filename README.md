# Movie 2 Movie
### A movie connection game using [TMDB API]

![The Movie Database][The Movie Database]

> [Live Demo](https://movie2movie.netlify.app/)



Project created with:

```sh
npm create vite
```

To run the code use:

```sh
npm run dev
```
The idea for this game first came to me as soon as I found out about [TMDB API].
The goal is to connect one movie to another by linking the people that worked on it and try and find the shortest path between the two movies. There are a bunch of premade challenges like "E.T. (1982) to ALIEN (1979)" or "Dune (1984) to Dune (2021)" but you can also pick two random movies for a harder challenge.

The process:

I made a playable prototype on vanilla javascript in a couple of hours but I decided that I wanted to practice my ReactJS skills, so I re-did everything.
First I made all the validations myself, like only grab movies with a certain amount of rating so you dont get too many unknown films that made the game pretty impossible.
But as soon as I saw that the loading times were high I switched and used the 'discover' feature on TMDB, wich allowed me to get the movies based on specific queries.
Using this allowed me to add a filter by language, now you can control wich region the movie comes from. Unfortunately this particular API does not give clear data of the movie's country of origin, as many films get produced by many countries.

Using React-Router allowed me to create a simple way to share the results, since I'm feeding the app with the url's params: "play/firstmovie:id/secondmovie:id" all you have to do is copy that link and another person can play the same level as you.

Thus, I created a way (inspired by wordle) to share your results without spoiling the solution, when you press the 'SHARE' button, a similar text to this gets copied to your clipboard:

✨Dune (1984)
⬇️9 steps⬇️
✨Dune (2021)
      
🎬see if you can do it better:
      
💻https://movie2movie.netlify.app/play/841/438631


The styles are still a work in process, I made shure the information was displayed clearly and that the game was playable on all platforms using [Sass], but many visual aspects of the game are still being worked on.

For the main UI of the game I got inspired by [Connect the Stars], a similar (although fairly different) game that I found while researching if my idea has already been made.





## Libraries used

| Library |  | Version |
| ------ | ------ | ------ |
| [React-Router] | To manage the SPA | 6.0.2 
| [React-Spinners] | Loading animations | 0.11.0
| [Material-Icons] | Icons | 5.4.1
| [Sass] |  | 7.0.1


## I also used

|  |  |
| ------ | ------ |
| [Cloudinary] | Image hosting
| [Netlify] | Deploy




   [Sass]: <https://sass-lang.com/>
   [Material-Icons]: <https://mui.com/components/material-icons/>
   [React-Router]: <https://reactrouter.com/>
   [React-Spinners]: <https://github.com/davidhu2000/react-spinners>
   [Font Awesome]: <https://fontawesome.com/>
   [Cloudinary]: <https://cloudinary.com/>
   [Netlify]: <https://www.netlify.com/>
   [TMDB API]: <https://www.themoviedb.org/documentation/api>
   [Connect the Stars]: <https://connectthestars.xyz/>


[The Movie Database]:https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg
