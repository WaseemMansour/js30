const items = document.querySelectorAll('.item input[type=checkbox]');
let lastChecked = null;
let lastCheckedIndex;
let shiftDown = false;

items.forEach((item, i) => item.addEventListener('click', (e) => {
    if ( e.target.checked === true && lastChecked === null ) {
        lastChecked = e.target;
        lastCheckedIndex = i;
    }
        
    if ( e.target.checked === true 
        && e.shiftKey 
        && lastChecked != null 
        && lastCheckedIndex != i 
        ) {
        let selectedToCheck;
        if ( lastCheckedIndex > i ) {
            selectedToCheck = Array.from(items).slice(i+1, lastCheckedIndex);
        } else {
            selectedToCheck = Array.from(items).slice(lastCheckedIndex+1, i);
        }
        selectedToCheck.forEach(select => select.checked = true);
        lastChecked = e.target;
    }
    
}));