const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
if (id != "") {
  $.get(
    "https://febru-and-dxviii-deathbot-default-rtdb.firebaseio.com/" +
      id +
      ".json",
    function (data) {
      if (data != null) {
        let keys = Object.keys(data["reasons"]).reverse();
        for (let death in keys) {
          var dt = new Date(keys[death] * 1000);
          let date = dt.toLocaleString();
          $("#deathsTable").append(
            "<tr><td>" +
              date +
              "</td><td>" +
              data["reasons"][keys[death]] +
              "</td></tr>"
          );
        }
      } else {
        $("#deathsTable").append(
          '<tr><td>Error!</td><td>Load page using correct id! <span style="color:#a84357">https://febru.me/deaths/?id=&lt;your_discord_id&gt;<span></td></tr>'
        );
      }
    }
  );
}
