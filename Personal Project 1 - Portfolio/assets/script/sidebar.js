var sidebarDirection = "";
$('#sidebartitle').on('click', function () {  //body moves to right
    //decide if sidebar goes from top or left
    if ($(window).width() > 700) {
        //extend the sidebar height to 100% since it is going to pop up from the left
        $('#sidenav').css({
            "height": "100%",
            "text-align": "left",
            "padding-top":'50px',
        })
        
        //create an overlay when the sidebar is opened
        $('#overlay').animate({
            marginLeft: "250px"
        }, { duration: 500, queue: false })
        $('#overlay').fadeIn({ duration: 500, queue: false });
        //push all element to the right
        $('.sidebarMoveable').animate({
            marginLeft: "250px"
        }, { duration: 500, queue: false })
        //sidebar extends from left
        $('#sidenav').animate({
            width: "250px"
        }, { duration: 500, queue: false })
        //recrod that sidebar pop up from the left for closing operation
        sidebarDirection = 'fromLeft';
    } else {
        //extend the sidebar width to 100% since it is going to pop up from the top
        $('#sidenav').css({
            "width": "100%",
            "padding-top":'0',
            "text-align": "center"
        })
        //create an overlay when the sidebar is opened
        $('#overlay').animate({
            marginTop: "240px"
        }, { duration: 500, queue: false })
        $('#overlay').fadeIn({ duration: 500, queue: false });
        //push all element downward
        $('#sidebar-pusher').animate({
            height: "240px"
        }, { duration: 500, queue: false })
        //sidebar extends from the top
        $('#sidenav').animate({
            height: "240px"
        })
        //recrod that sidebar pop up from the top for closing operation
        sidebarDirection = 'fromTop';
    }
})

//create a function when sidebar is completely close, sidebar height and width goes back to 0
function closeSidebar() {
    $('#sidenav').css({
        "height": 0,
        "width": 0
    })
}
//move things back to left if sidebar was opened from the left
$('#closebtn, #overlay').on('click', function () {
    if (sidebarDirection == 'fromLeft') {
        //content shift back to the left
        $('.sidebarMoveable').animate({
            marginLeft: 0
        }, { duration: 500, queue: false })
        //sidebar collapse
        $('#sidenav').animate({
            width: 0
        }, { duration: 500, queue: false })
        //overlay disappear
        $('#overlay').animate({
            marginLeft: "0"
        }, { duration: 500, queue: false })
        $('#overlay').fadeOut({ duration: 500, queue: false });
        //after all animation of close sidebar is completed, resize the sidebar to 0 0
        setTimeout(closeSidebar, 500);
        //move things back to top if sidebar was opened from the top
    } else if (sidebarDirection == 'fromTop') {
        //content shift back to the top
        $('#sidebar-pusher').animate({
            height: "0"
        }, { duration: 500, queue: false })
        //sidebar collapse
        $('#sidenav').animate({
            height: 0
        }, { duration: 500, queue: false })
        //overlay disappear
        $('#overlay').animate({
            marginTop: "0"
        }, { duration: 500, queue: false })
        $('#overlay').fadeOut({ duration: 500, queue: false });
        //after all animation of close sidebar is completed, resize the sidebar to 0 0
        setTimeout(closeSidebar, 500);
    }
})
