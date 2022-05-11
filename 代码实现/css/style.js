window.onload=function() {
    var items=document.getElementsByClassName('item');
    var leftbtn=document.getElementById('goleft');
    var rightbtn=document.getElementById('goright');
    var points=document.getElementsByClassName('point');


    var index=0;
    var clearactive=function() {
        for(var i=0;i<items.length;i++) {
            items[i].className='item';
        }
        for(var i=0;i<points.length;i++) {
            points[i].className='point';
        }
    }


//表示第几章图片在展示第index张图片有active
    var goindex=function() {
        clearactive();
        points[index].className='point active';
        items[index].className='item active';
    }
    var goright=function() {
        if(index<5) {
            index++;
        }
        else {
            index=0;
        }
        goindex();
    }
    rightbtn.addEventListener('click',function() {
        goright();
    })
    var goleft=function() {
        if(index==0) {
            index=4;
        }
        else{
            index--;
        }
        goindex();
    }
    leftbtn.addEventListener('click',function() {
        goleft();
    })

// 靠index参数将图片和点之间建立联系
}
