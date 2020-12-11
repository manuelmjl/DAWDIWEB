$(document).ready(function(){
    const imageCollection = [
        {
            link: 'https://wallpaperaccess.com/full/536548.jpg',
            color: '#808e9b'
        },
        {
            link: 'https://www.wallpaperup.com/uploads/wallpapers/2014/09/29/462834/29dabcf8fc4d52f478bd006b4ccb7358-700.jpg',
            color: '#f1c40f'
        },
        {
            link: 'https://images-na.ssl-images-amazon.com/images/I/71MMcxM36GL._AC_SL1500_.jpg',
            color: '#3498db'
        },
        {
            link: 'https://i.pinimg.com/originals/9d/0e/26/9d0e264872f3a0113d1cae51156c3f5b.jpg',
            color: '#c0392b'
        },
    ]


    const settings = {
        duration : '2500',
        random: false
    }

    
    var prevButton = $('.prev'),
        images = $('.slide'),
        index = 0,
        icons = $('.buttons'),
        slideCount = imageCollection.length,
        interval,
        nextButton = $('.next');

    autoSlider(settings);    

    nextButton.click(function(e){
        index++;
        showSlide(index);
        console.log(index);
    })

    prevButton.click(function(){
        index--;
        showSlide(index);
        console.log(index);
    })

    icons.mouseover(function(){
        clearInterval(interval);
    })

    icons.mouseleave(function(){
        autoSlider(settings);
    })

    

    function autoSlider(settings){

        var prev;
        interval = setInterval(function(){
            
            if(settings.random){
                do{
                    index = Math.floor(Math.random() * slideCount);
    
                }while(index == prev)
                prev = index;
                console.log(index)
                
            }

            else{
                if(slideCount == index){
                    index = 0;
                }
                index++;
                console.log(index);
            }

            showSlide(index);

        },settings.duration)
    }

    function showSlide(i){
        index = i;

        if(i<0){
            index= slideCount-1;
        }
        
        if(i>=slideCount){
            index = 0;
        }

        images.css('background-image', 'url('+imageCollection[index].link+')');
        icons.css('color',imageCollection[index].color);
    }

    
});