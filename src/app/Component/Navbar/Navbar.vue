<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <span class="d-block d-lg-none">
                        <img class="photo1 img-fluid img-profile rounded-circle mx-auto mb-2" width="70" src= "img/an1.jpg" alt="">
            </span>
            <span class="d-none d-lg-block">
            <img class="photo img-fluid img-profile rounded-circle mx-auto mb-2" width="150" src= "img/an1.jpg" alt="">
            </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about">Sobre mi</a>
            </li>
            <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#experience">Conocimientos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#education">Educación</a>
            </li>
            <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#interests">Intereses</a>
            </li>
            </ul>
        </div>
    </nav>
</template>
<style>
.photo{
    display:block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;   
        transform:scale(1);
        -ms-transform:scale(1);
        -moz-transform:scale(1); 
        -webkit-transform:scale(1);
        -o-transform:scale(1);
        -webkit-transition: all 500ms ease-in-out; 
        -moz-transition: all 500ms ease-in-out; 
        -ms-transition: all 500ms ease-in-out;  
        -o-transition: all 500ms ease-in-out;      
}
.photo:hover{
            transform:scale(1.2);
            -ms-transform:scale(1.2);
            -moz-transform:scale(1.2);
            -webkit-transform:scale(1.2);
            -o-transform:scale(1.2);
}
.photo1:hover{
            transform:scale(1.2);
            -ms-transform:scale(1.2);
            -moz-transform:scale(1.2);
            -webkit-transform:scale(1.2);
            -o-transform:scale(1.2);
}
</style>

