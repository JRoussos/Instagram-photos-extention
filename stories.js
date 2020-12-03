    source = document.getElementsByClassName("qbCDp");
    if(source.length > 0){
        window.open(source[0].getElementsByTagName("img")[0].getAttribute("src"));
        video = source[0].getElementsByTagName("video");
        if(video.length > 0)
            window.open(video[0].getElementsByTagName("source")[0].getAttribute("src"));
    }