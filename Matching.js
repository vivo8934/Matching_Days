var MyDays = document.querySelectorAll('td');
var FirstDay = document.querySelector('#date1');
var SndDay = document.querySelector('#date2');


function Magic() {
  var Day = new Date(FirstDay.value)
  var Days = new Date(SndDay.value)

  var Alist = Day.getDay()
  var Blists = Days.getDay()

  clear();

  if (Alist === Blists) {
    MyDays[Blists].className = 'DayMatch';

  } else {
    MyDays[Alist].className = 'DiffN';
    MyDays[Blists].className = 'DiffM';

  }

}

function clear() {
  for (var i = 0; i < MyDays.length; i++) {
    MyDays[i].classList.remove('DayMatch');
    MyDays[i].classList.remove('DiffM');
    MyDays[i].classList.remove('DiffN');
  }
}
FirstDay.addEventListener('change', Magic);
SndDay.addEventListener('change', Magic);
