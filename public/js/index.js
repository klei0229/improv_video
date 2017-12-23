//Index.js contains code provided by agora's template video file that is required to build basic video chatrooms.
//
(function($) {
    $(function() {
        var maxRateSlider = createSlider();

        $("#videoOptionsModal").on("hide.bs.modal", function() {
            var resolution = '720p';
            var maxFrameRate = $("#maxFrameRate").val() || 30;
            //var maxBitRate = maxRateSlider.slider("getValue") || 750;

            Cookies.set("resolution", resolution);
            Cookies.set("maxFrameRate", maxFrameRate);
            //Cookies.set("maxBitRate", maxBitRate);
        });

        $("#join-meeting").click(function(e) {
            e.preventDefault();
            var roomName = $("#room-name").val();
            var userName = $("#user-name").val();

            //var timer = $("#timer").val();
            var timerOptionValue = document.getElementById("timer-pref")
            var timerValue = timerOptionValue.options[timerOptionValue.selectedIndex].value;  

            if (!roomName) {
                $("#room-name").addClass("required-field");
            }

            if (roomName) {
                Cookies.set("roomName", roomName);
                Cookies.set("userName", userName);
                Cookies.set("timer", timerValue);
                
                window.location.href = "meeting.html";
            }
        });

      
    });
}(jQuery));