var DaoManager = function(){
    this.daos = {};
    this.connection = {
        protocol: "https",
        url: "localhost",
        port: "8081"
    };
    this.connection.getFullUrl = function() {
        var result = "";

        result += this.protocol + '//' + this.url + ':' + this.port;
        console.log("full url to server: " + result);
        return result;
    };
};

DaoManager.getDao = function(dao) {
    if (!this.daos[dao]) {
        this.daos[dao] = this.createDao(dao);
    }

    return this.daos[dao];
};

DaoManager.createDao = function(dao) {
    return new dao();
};
exports.default = DaoManager;
module.exports = exports.default;
