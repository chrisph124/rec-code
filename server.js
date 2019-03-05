const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./mockdata/movie.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/api/v3/recommendation', (req, res) => {
    if (req.body && Object.keys(req.body).length > 0) {
        switch (req.body.groupName) {
            case "similarity":
                res.jsonp([router.db.__wrapped__.recommendation_movies[1]]);
                break;
        
            default:
                res.jsonp(router.db.__wrapped__.recommendation_movies);
                break;
        }
    } else {
        res.status(400).send("Bad Request");
    }
})
server.get('/api/movie', (req, res) => {
    var movies = router.db.__wrapped__.recommendation_movies;
    var movieId = req.query['movieId'];
    var result = {};
    movies.some(groupMovie => {
        if (groupMovie.item.length > 0) {
            let data = groupMovie.item.filter(movie => {
                return movie.movieId === movieId;
            });
            if (data.length > 0) {
                result = data[0];
                return true;
            }
        }
    });
    res.jsonp(result);
})

server.get('/api/login', (req, res) => {
    if (req.query && Object.keys(req.query).length > 0) {
        if (req.query.userId === "admin") {
            res.json({status: "success"});
        } else {
            res.json({status: "failure"});
        }
    }
})

server.listen(3000, () => {
    console.log('JSON server is running');
})