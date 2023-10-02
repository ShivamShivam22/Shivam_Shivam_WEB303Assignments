$(document).ready(function () {
    function fetchTeamJSONUsingAjax() {
        $("#team").text("Loading...");

        $.ajax({
            type: "GET",
            url: "team.json",
            dataType: "json",
            success: function (data) {
                setTimeout(function () {
                    $("#team").empty();
                    displayTeamData(data.members);
                }, 3000);
            },
            error: function () {
                $("#team").text("Error: Content could not be retrieved.");
            }
        });
    }
    function displayTeamData(members) {
        $("#team").empty();
        $.each(members, function (index, member) {
            var $memberDiv = $("<div>");
            $memberDiv.append("<h2>" + member.name + "</h2>");
            $memberDiv.append("<h5>" + member.position + "</h5>");
            $memberDiv.append("<p>" + member.bio + "</p>");
            $("#team").append($memberDiv);
        });
    }
    fetchTeamJSONUsingAjax();
});
