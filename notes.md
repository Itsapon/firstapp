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

If you're gonna have a component on every page, just put it on the top component (like nav bar and menu)

keep it stupid simple

===EXERCISE TMW===
make page that fetches a thing and displays it
then
make page that displays scoreboard
