const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActiveOpen));

    function toggleOpen() {
      console.log(this)
      this.classList.toggle('open');
      // this.classList.toggle('open-active');
    }

    function toggleActiveOpen(e) {
      console.log(e.propertyName);
      if ( e.propertyName.includes('flex') ) this.classList.toggle('open-active')
    }