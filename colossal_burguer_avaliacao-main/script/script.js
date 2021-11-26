class  MobileNavbar  {
    construtor ( mobileMenu ,  navList ,  navLinks )  {
      isso . mobileMenu  =  documento . querySelector ( mobileMenu ) ;
      isso . navList  =  document . querySelector ( navList ) ;
      isso . navLinks  =  documento . querySelectorAll ( navLinks ) ;
      isso . activeClass  =  "ativo" ;
  
      isso . handleClick  =  this . handleClick . vincular ( isso ) ;
    }
  
    animateLinks ( )  {
      isso . navLinks . forEach ( ( link ,  índice )  =>  {
        link . estilo . animação
          ? ( link . style . animation  =  "" )
          : ( link . style . animation  =  `navLinkFade 0.5s easy forward $ {
              índice  /  7  +  0,3
            } s`);
      } ) ;
    }
  
    handleClick ( )  {
      isso . navList . classList . toggle ( this . activeClass ) ;
      isso . mobileMenu . classList . toggle ( this . activeClass ) ;
      isso . animateLinks ( ) ;
    }
  
    addClickEvent ( )  {
      isso . mobileMenu . addEventListener ( "click" ,  this . handleClick ) ;
    }
  
    init ( )  {
      if  ( this . mobileMenu )  {
        isso . addClickEvent ( ) ;
      }
      devolva,isso ;
    }
  }
  
  const  mobileNavbar  =  new  MobileNavbar (
    ".mobile-menu" ,
    ".nav-list" ,
    ".nav-list li" ,
  ) ;
  mobileNavbar . init ( ) ;
