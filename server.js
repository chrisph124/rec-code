const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./mockdata/movie.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/api/v2/recommendation', (req, res) => {
    if (req.body && Object.keys(req.body).length > 0) {
        switch (req.body.type) {
            case "RelatedMovie":
                res.jsonp(router.db.__wrapped__.relatedMovies);
                break;
        
            default:
                res.jsonp(router.db.__wrapped__.movies);
                break;
        }
    } else {
        res.status(400).send("Bad Request");
    }
})
server.get('/api/v2/recommendation/video/:id', (req, res) => {
    var movies = router.db.__wrapped__.movies;
    var movieId = req.params['id'];
    var result = movies.filter(item => {
        return item.movieId === movieId;
    });
    if (result.length > 0) {
        res.jsonp(result[0]);
    } else {
        res.jsonp({});
    }
})

server.listen(3000, () => {
    console.log('JSON server is running');
})