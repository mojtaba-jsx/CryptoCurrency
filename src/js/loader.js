//! Loader 
function hideLoader() {
    document.querySelector('.loader').style.display = 'none';
  }
  
  setTimeout(()=>{
    hideLoader()
  },200)