===ROUTING===

<App  /> is just shorthand for
<App></App>

<Switch>
<Route path='/Contact' component={Contactpage}}/>
<Route path='/About' component={AboutPage}/>
<Route path='/'component={Homepage}>
</Switch>

Always put your homepage on the bottom, because the path is just a / and else other urls will just automatically go to homepage

adding exact={true} makes the router look for exact match, also to prevent this^
exact is the same as exact {true} because it already runs if it's true

If you're gonna have a component on every page, just put it on the top component (like nav bar and menu)

keep it stupid simple

every time you wrap something around app in index.js you make it available to in the entire app
no functional difference between NavLink and Link

===EXERCISE TMW===
make page that fetches a thing and displays it
then
clicking on one of the links displays shows details

===DYNAMIC ROUTE===
set up like regular

KARLA SETS UP EASIER VERSION
-> hardcode
fetch api movies
const searchText="life"
then interpolate in the url
Karla does useState last
so first async, useffect, check everything, then create useState and modify in async
last step is mapping it
map:
{!movies?"Loading"
:movies.map(movie=>{
return
})}

<img src={}>

The non hardcoded variant is where now there's a const searchText="" is filledin with an input which is do9ne with form from yesterday

NOW TO MAKE IT DYNAMIC
when I click on movie name I need details

const singleMOvie= sth to be found in api again, it's an endpoint. after questionmark there's no s, but an i for id

==NEW COMPONENT FOR DETAILSPAGE===
<Route path="/movie/:id"> // the : means 'this path is gonna change depending on something somewhere' it can be id or banana or whatever
more than one dynamic routes is possible
search/:movie/:id
but no
test: type whatever u want atfer movie/ , it should go to details page

<Link to ={movie/${movieId}} >

===NEW HOOK WHO DIS===
how to get from url:
useParams (from react-router-dom)
associate it w a variable
const params=useParams()
console.log(params)
You get an object, with one key SO DOT NOTATION
final step:
fetch data w id
const fetchData = async()=>{
const response= await axios.get(url BUT THEN for the id part you do ${params.movieId})
}
when useState with params => IT IS OBJECT
SO YOU DONT MAP
IT SILLY
MAP IS FOR ARRAY
Just render it

<h3>movie.Title</h3>
etc

PASSING PROPS
fetching data
display data
fetch pages
