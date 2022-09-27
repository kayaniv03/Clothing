const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML = `<div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
     <ul class="category">
         <li class="category-title">men</li>
         <li><a href="#" class="footer-link">t-shirts</a></li>
         <li><a href="#" class="footer-link">sweatshirts</a></li>
         <li><a href="#" class="footer-link">shirts</a></li>
         <li><a href="#" class="footer-link">jeans</a></li>
         <li><a href="#" class="footer-link">trousers</a></li>
         <li><a href="#" class="footer-link">shoes</a></li>
         <li><a href="#" class="footer-link">casuals</a></li>
         <li><a href="#" class="footer-link">formals</a></li>
         <li><a href="#" class="footer-link">sports</a></li>
         <li><a href="#" class="footer-link">watch</a></li>

     </ul>
     <ul class="category">
         <li class="category-title">women</li>
         <li><a href="#" class="footer-link">t-shirts</a></li>
         <li><a href="#" class="footer-link">sweatshirts</a></li>
         <li><a href="#" class="footer-link">shirts</a></li>
         <li><a href="#" class="footer-link">jeans</a></li>
         <li><a href="#" class="footer-link">trousers</a></li>
         <li><a href="#" class="footer-link">shoes</a></li>
         <li><a href="#" class="footer-link">casuals</a></li>
         <li><a href="#" class="footer-link">formals</a></li>
         <li><a href="#" class="footer-link">sports</a></li>
         <li><a href="#" class="footer-link">watch</a></li>

     </ul>


    </div>
    
</div>
<p class="footer-title">about company</p>
        <p class="info">Jetez-y la sonde, vous n’en connaîtrez jamais la profondeur” disait Balzac. Chaque jour passé dans les rues de notre chère capitale lui donne toujours plus raison. En effet, Paris regorge de pépites cachées, de lieux insolites et planqués, de merveilles dissimulées au coin des rues… Dans cet article découvrez  un condensé de quelques-uns de nos lieux préférés pour vous donner envie d’en savoir plus sur les tréso </p>
        <p class="info">support emails - help@clothing.com,
         customersupport@clothing.com
        </p>
        <p class="info">contactus - 1800 0000 001, 1800 0000 002
        </p>
        <div class="footer-social-container">
              <div>
                 <a href="#" class="social-links">terms & services</a>
                 <a href="#" class="social-links">privacy page</a>
              </div>
              <div>
                 <a href="#" class="social-links">twitter</a>
                 <a href="#" class="social-links">facebook</a>
                 <a href="#" class="social-links">instagram</a>
              </div>

        </div>
        <p class="footer-credit">clothing, Best apparels online store</p>
    `;
}
createFooter();