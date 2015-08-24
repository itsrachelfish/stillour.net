module.exports = function(server)
{
    var app = server.app;
    var config = server.config;
    var event = server.event;
    var model = server.model;

    function randomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function randomMessage()
    {
        var messages =
        [
            "it's still our internet",
            "it's still your internet",
            "the internet is still ours",
            "the internet is still yours",
            "the internet belongs to everybody",
            "the internet belongs to everyone",
            "the internet belongs to you",
            "anything is possible"
        ];

        var random = randomInt(0, messages.length);

        console.log(new Date().toLocaleString(), '-', random, '-', messages[random]);

        return messages[random];
    }

    app.get("/", function(req, res)
    {
        event.emit("render", req, res, {view: "index", message: randomMessage()});
    });
}
