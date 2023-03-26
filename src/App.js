
import './App.css';
import Filter from './filter/Filter';
import Footer from './items/Footer';
import FruitItems from './items/FruitItems';
import AppBar from './navbar/AppBar';

var scrollToTopBtn = document.getElementById("scroll-to-top-btn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

function App() {
  return (
    <>
      <AppBar/>
      <Filter/>
      <FruitItems/>
      <Footer/>
      <button className=' bg-green-500 text-white hover:bg-slate-400' id="scroll-to-top-btn">Scroll to Top</button>
    </>
  );
}

export default App;
