var users = [
    {id:1, name:"HA", age:25},
    {id:2, name:"PJ", age:28},
    {id:3, name:"JE", age:27}
]
$('.user-list').append(
    _.map(users, function (user) {
        var button = $('<button>').text(user.name);
        button.click(function () {
            if(confirm(user.name + "님을 팔로우 하시겠습니까?")) follow(user);
        });
        return button;
    })
function  follow(user) {
    $.post('/follow', {user_id : user.id}, function () {
        alert("이제 " + user.name + "님의 소식을 보실 수 있습니다.")
    })
)