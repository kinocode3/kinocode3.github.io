(function (ext) {

    var blockHits = false;
    
    ext.getRotation = function(str) {
        var cmdUrl = "http://localhost:4715/postToChat/" + encodeURIComponent(str);
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("postToChat success");
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error postToChat: ", error);
            }
        }); // nb: GET is including the javascript callback. Do I need this for one-way call?
    };

    ext.postToChat = function(str) {
        var cmdUrl = "http://localhost:4715/postToChat/" + encodeURIComponent(str);
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("postToChat success");
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error postToChat: ", error);
            }
        }); // nb: GET is including the javascript callback. Do I need this for one-way call?
    };

    ext.playerPosToChat = function() {
        var cmdUrl = "http://localhost:4715/playerPosToChat";
        $.ajax({
            type: "GET",
            url: cmdUrl,
            // dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("playerPosToChat success");
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error playerPosToChat: ", error);
            }
        }); // nb: GET is including the javascript callback. Do I need this for one-way call?
    };

    ext.setPlayerPos = function(x, y, z) {
        var cmdUrl = "http://localhost:4715/setPlayerPos/" + x + "/" + y + "/" + z;
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("setPlayerPos success");
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error setPlayerPos: ", error);
            }
        }); // nb: GET is including the javascript callback. Do I need this for one-way call?
    };

    ext.setBlock = function(x, y, z, blockType, blockData, posType) {
        var cmdUrl = "http://localhost:4715/setBlock/" + x + "/" + y + "/" + z + "/" + blockType + "/" + blockData + "/" + posType;
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("setBlock success");
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error setBlock: ", error);
            }
        }); // nb: GET is including the javascript callback. Do I need this for one-way call?
    };

    ext.setBlocks = function(x1, y1, z1, x2, y2, z2, blockType, blockData) {
        var cmdUrl = "http://localhost:4715/setBlocks/" + x1 + "/" + y1 + "/" + z1 + "/"
            + x2 + "/" + y2 + "/" + z2 + "/" + blockType + "/" + blockData;
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("setBlocks success");
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error setBlocks: ", error);
            }
        }); // nb: GET is including the javascript callback. Do I need this for one-way call?
    };

    ext.setLine = function(x1, z1, x2, z2, y, blockType, blockData) {
        var cmdUrl = "http://localhost:4715/setLine/" + x1 + "/" + z1 + "/"
            + x2 + "/" + z2 + "/" + y + "/" + blockType + "/" + blockData;
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("setLine success");
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error setLine: ", error);
            }
        }); // nb: GET is including the javascript callback. Do I need this for one-way call?
    };

    ext.setCircle = function(x, z, r, y, blockType, blockData) {
        var cmdUrl = "http://localhost:4715/setCircle/" + x + "/" + z + "/"
            + r + "/" + y + "/" + blockType + "/" + blockData;
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("setCircle success");
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error setCircle: ", error);
            }
        }); // nb: GET is including the javascript callback. Do I need this for one-way call?
    };

    // get one coord (x, y, or z) for playerPos
    ext.getPlayerPos = function(posCoord, callback) {
        var cmdUrl = "http://localhost:4715/getPlayerPos/" + posCoord;
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("getPlayerPos success ", data.trim());
                callback(data.trim());
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error getPlayerPos: ", error);
                callback(null);
            }
        });
    };

    // get one coord (x, y, or z) for playerPos
    ext.getBlock = function(x, y, z, posType, callback) {
        var cmdUrl = "http://localhost:4715/getBlock/" + x + "/" + y + "/" + z + "/" + posType;
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("getPlayerPos success ", data.trim());
                callback(data.trim());
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error getPlayerPos: ", error);
                callback(null);
            }
        });
    };

    function checkMC_Events() {
        var cmdUrl = "http://localhost:4715/pollBlockHit/";
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("checkMC_Events success ", data.trim());
                if (parseInt(data) == 1)
                    blockHits = true;
                else
                    blockHits = false;
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error checkMC_Events: ", error);
                callback(null);
            }
        });
    };

    ext.whenBlockHit = function(str) {
        if (!blockHits)
            return;
        else
            return true;
    };


    ext._getStatus = function() {
        return { status:2, msg:'Ready' };
    };

    ext._shutdown = function() {
        if (poller) {
          clearInterval(poller);
          poller = null;
        }
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ["R", "自分の座標 %m.pos", "getPlayerPos", 'x'],
            ["R", "自分の座標 %m.pos", "getPlayerPos", 'y'],
            ["R", "自分の座標 %m.pos", "getPlayerPos", 'z'],
            [' ', "チャット %s", "postToChat", "ここに入力"],
            [" ", "自分の座標をチャットに表示", "playerPosToChat"],
            [" ", "自分の座標を変更 x:%n y:%n z:%n", "setPlayerPos", 0, 0, 0],
            ["R", "ブロックのIDを調べる pos x:%n y:%n z:%n %m.blockPos", "getBlock", 0, 0, 0],
            [" ", "ブロックを置く x:%n y:%n z:%n ID %n data %n %m.blockPos", "setBlock", 0, 0, 0, 1, -1],
            [" ", "ブロックを一列に置く x1:%n z1:%n から  x2:%n z2:%n y:%n まで  ID %n data %n", "setLine", 0, 0, 0, 0, 0, 1, -1],
            [" ", "ブロックを複数列に置く x1:%n y1:%n z1:%n から  x2:%n y2:%n z2:%n まで  ID %n data %n", "setBlocks", 0, 0, 0, 0, 0, 0, 1, -1],
            [" ", "ブロックを円状に置く  中心 x1:%n z1:%n  半径 r:%n 高さ y:%n to ID %n data %n", "setCircle", 0, 0, 0, 0, 0, 1, -1],
            ["h", "ブロックを剣で右クリックした時", 'whenBlockHit'],
            [" ", "向きをチャットに表示 %s", 'getRotation', "ここに入力"],
        ],
        menus: {
            pos: ['x', 'y', 'z'],
            blockPos: ['絶対', 'rel']
        }
    };

    // Register the extension
    ScratchExtensions.register('MCPI-Scratch', descriptor, ext);

    checkMC_Events();
    var poller = setInterval(checkMC_Events, 2000);

})({});
