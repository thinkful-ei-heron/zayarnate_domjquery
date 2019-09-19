function main(){
    $('.thumbnail').on('click', 'img', e => {
        console.log(e.target);
        let imageSrc = $(e.target).attr('src');
        //let bigImageSrc = $('#bigimage').attr('src');
        $('#bigimage').attr('src', imageSrc);
      });
    
};

$(main);