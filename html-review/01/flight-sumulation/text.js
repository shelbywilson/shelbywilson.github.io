//progress - to the 10th


// this function updates the timezone to the page 
let timeDisplay = $('#time')
let displayedTime
let zone = "local" 
let hour
let minute 
let second
let enableDelay = 0
let delayAnHour = 0
let hour15minH = 0
let hour15minM = 0
let typeWriterActive = false 
let loseHour = 0
let gainHour = 0
let col = 255
let a = 0.5
let buttonEnable = false 
let timeArray = []
let dateChange = "none"
let secondsDiff11 = 0
let mintuesDiff11 = 0
let hoursDiff11 = 0
let secondsDiff12 = 0
let mintuesDiff12 = 0
let hoursDiff12 = 0


function updateTimeZone(){
    let date = new Date()
    // console.log(currentDate)
    let timeString
    if(zone == "local"){
        timeString =  date.toLocaleString("en-US", {hour12: false})
        let changeTime = timeString.split(' ')[1].split(':')
        if(changeTime[0] == "24"){
            timeString = timeString.split(' ')[0] + " 00:" + changeTime[1] +":"+ changeTime[2]
        }
    } else {
        timeString =  date.toLocaleString("en-US", {timeZone: zone, hour12: false});
        // fix bug, when hour is 24 need to convert to 00
        let changeTime = timeString.split(' ')[1].split(':')
        if(changeTime[0] == "24"){
            timeString = timeString.split(' ')[0] + " 00:" + changeTime[1] +":"+ changeTime[2]
        }

    }
    //delay time every 10 seconds when delay is clicked
    d = new Date(timeString)
    //s console.log(d + ' this is the date when d')
    d.setSeconds(d.getSeconds() - 10*enableDelay - secondsDiff11 - secondsDiff12)
    d.setMinutes(d.getMinutes() - hour15minM - mintuesDiff11 - secondsDiff12)
    d.setHours(d.getHours() - delayAnHour - loseHour + gainHour - hour15minH - hoursDiff11 - secondsDiff12)

    if(dateChange == 'ny11pm'){
        secondsDiff11 = d.getSeconds() - 0
        mintuesDiff11 = d.getMinutes() - 0
        hoursDiff11 = d.getHours()-23
        secondsDiff12 = 0
        mintuesDiff12 = 0
        hoursDiff12 = 0
        enableDelay = 0
        hour15minH = 0
        hour15minM = 0
        delayAnHour = 0
        loseHour = 0
        gainHour = 0
        d.setSeconds(0)
        d.setMinutes(0)
        d.setHours(23)
    } else if(dateChange == 'ny12pm'){
        secondsDiff12 = d.getSeconds() - 0
        mintuesDiff12 = d.getMinutes() - 32
        hoursDiff12 = d.getHours()-24
        secondsDiff11 = 0
        mintuesDiff11 = 0
        hoursDiff11 = 0
        enableDelay = 0
        hour15minH = 0
        hour15minM = 0
        delayAnHour = 0
        loseHour = 0
        gainHour = 0
        d.setSeconds(0)
        d.setMinutes(32)
        d.setHours(24)
    }
    dateChange = 'none'
    
    //bug: - if both time difference is calculated then you have to calculate the difference between the time ??? no that is not it. the second it is clicked produce correct result, but not after 
    // console.log(dateChange + secondsDiff11 + " seconds diff 11 " + mintuesDiff11 + " minutes diff 11 " + hoursDiff11 + " hours diff 11 " + secondsDiff12 + " seconds diff 12 " + mintuesDiff12 + " minutes diff 12 " + hoursDiff12 + " hours diff 12 " )
    


    // console.log(d)
    displayedTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    timeDisplay.text(displayedTime)
    setTimeout(updateTimeZone, 1000);
}



// display texts functions ----------------------------------------------------------

let p02 = $('#p02').html()
let p02display = false 

let p03 = $('#p03').html()
let p03display = false 

let p04 = $('#p04').html()
let p04display = false

let p05 = $('#p05').html()
let p05display = false

let p06 = $('#p06').html()
let p06display = false

let p07 = $('#p07').html()
let p07display = false

let p08 = $('#p08').html()
let p08display = false

let p09 = $('#p09').html()
let p09display = false

let p10 = $('#p10').html()
let p10display = false

let p11 = $('#p11').html()
let p11display = false

let p12 = $('#p12').html()
let p12display = false

let p13 = $('#p13').html()
let p13display = false

let p14 = $('#p14').html()
let p14display = false

let p15 = $('#p15').html()
let p15display = false

let p16 = $('#p16').html()
let p16display = false

let p17 = $('#p17').html()
let p17display = false


let p18 = $('#p18').html()
let p18display = false

let p19 = $('#p19').html()
let p19display = false

let p20 = $('#p20').html()
let p20display = false

let p22 = $('#p22').html()
let p22display = false

let p23 = $('#p23').html()
let p23display = false


let p24 = $('#p24').html()
let p24display = false

let p25 = $('#p25').html()
let p25display = false


let p26 = $('#p26').html()
let p26display = false

let p27 = $('#p27').html()
let p27display = false


let p28 = $('#p28').html()
let p28display = false

let p29 = $('#p29').html()
let p29display = false

let p30 = $('#p30').html()
let p30display = false

let p31 = $('#p31').html()
let p31display = false

let p32 = $('#p32').html()
let p32display = false


let p33 = $('#p33').html()
let p33display = false

let p34 = $('#p34').html()
let p34display = false


//P01 "delayed" 
$('#textContainer').on('click','#delay01',()=>{
    $("#delay01").addClass('clickedLink')
    $('#delayAnHour').addClass('clickedLink')
    if(!p02display){
        $("#text").append("<div id='p02show' class='textDiv'>"+ p02 +"</div>")
    }
    p02display = true;
    $('.read04').addClass('clickedLink')
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})

//P01 "an hour" 
$('#textContainer').on("click", "#delayAnHour", ()=>{
    delayAnHour = 1
    if(!p02display){
        $('#text').append("<div id='p02show' class='textDiv'>" + p02 + "</div>")
    }
    p02display = true;
    $("#delayAnHour").addClass('clickedLink');
    $("#delay01").addClass('clickedLink')
    $('.read04').addClass('clickedLink')
    timeArray.push(displayedTime)
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//P01 "the city"
$("#theCity01").on('click',()=>{
    p04 = $('#p04').html()
    if(!p04display){  
        $('#text').append("<div id='p04show' class='textDiv'>" + p04 + "</div>")
    }
    p04display = true;
    $('#theCity01').addClass('clickedLink')
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})

 
//P02 "write", need to bound the onclick function to the parent div, JQuery OnClick Method is bound to an element or selector on page ready/load. 
$('#textContainer').on('click', '.write02', ()=>{
    // console.log(p03display)
    if(!p03display){
        $('#text').append("<div id='p03show' class='textDiv'>" + p03 + "</div>")
    }
    p03display = true;
    $(".write02").addClass('clickedLink')
    $('.read04').addClass('clickedLink')
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})

//p03 next 
$('#textContainer').on('click', '.next03',()=>{
    if(!p04display){
        $('.read04').contents().unwrap();
        $("br",'#p04').remove();
        let newp04 = $('#p04').html()
        $('#text').append("<div id='p04show' class='textDiv'>" + newp04 + "<span class='next04'>[next]</span><br/><br></div>")
        p04display = true;
        $('#theCity01').addClass('clickedLink')
    } else {
        $('#text').append("<div id='p05show' class='textDiv'>" + p05 + "</div>")
        p05display = true;
    }
    $('.next03').remove()
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})

//p04 next 
$('#textContainer').on('click', '.next04',()=>{ 
    $('#text').append("<div id='p05show' class='textDiv'>" + p05 + "</div>")
    p05display = true; 
    $('.next04').remove()
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p04 "read"
$('#textContainer').on('click', '.read04',()=>{
    if(!p02display){
        $('#text').append("<div id='p02show' class='textDiv'>" + p02 + "</div>")
        p02display = true
    } 
    $('.read04').addClass('clickedLink')
    $("#delayAnHour").addClass('clickedLink');
    $("#delay01").addClass('clickedLink')
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p05 "journal"
$('#textContainer').on('click', '.journal05',()=>{
    if(!p06display){
        $('#text').append("<div id='p06show' class='textDiv'>" + p06 + "</div>")
        // $('#text').append("<div id='p07show'>" + p07 + "</div>")
        $('#text').append("<div id='p07show' class='textDiv'><span id='typedText'></span><span id='cursor'> |</span></div>")

        p06display = true
        p07display = true
    } 
    $('.journal05').addClass('clickedLink')
    typeWriterActive = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p07 "seenIt07"
$('#text').on('click', '.seenIt07', ()=>{
    p08 = $('#p08').html()
    if(!p08display){
        $('#text').append("<div id='p08show' class='textDiv'>" + p08 + "</div>")
    }
    $('.seenIt07').addClass('clickedLink')
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})

//p07 "chicago"
$('#textContainer').on('click', '.chicago07', ()=>{
    if(!p09display){
        $('#text').append("<div id='p09show' class='textDiv'>" + p09 + "</div>")
    }
    $('.chicago07').addClass('clickedLink')
    $('.loseHour08').addClass('clickedLink')
    p09display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})



//P08 "gain An Hour"
$('#textContainer').on('click', '.gainHour08', ()=>{
    if(!p25display){
        /////////////////////////////here
        $('#text').append("<div id='p25show' class='textDiv'>" + p25 + "</div>")
        $('.noLink').removeClass('noLink')
    }
    $('.gainHour08').addClass('clickedLink')
    p25display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//P08 "lose An Hour"
$('#textContainer').on('click', '.loseHour08', ()=>{
    // console.log('clicked')
    if(!p09display){
        $('#text').append("<div id='p09show' class='textDiv'>" + p09 + "</div>")
    } 
    $('.loseHour08').addClass('clickedLink')
    $('.chicago07').addClass('clickedLink')
    p09display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p09 "waiting"
$('#textContainer').on('click', '.waiting09', ()=>{
    // console.log('clicked')
    if(!p10display){
        $('#text').append("<div id='p10show' class='textDiv'>" + p10 + "</div>")
    } 
    $('.waiting09').addClass('clickedLink')
    p09display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p10 "waiting"
$('#textContainer').on('click', '.redPlanet10', ()=>{
    // console.log('clicked')
    if(!p13display){
        $('#text').append("<div id='p13show' class='textDiv'>" + p13 + "</div>")
    } 
    $('.redPlanet10').addClass('clickedLink')
    p13display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})

//p10 "next"
$('#textContainer').on('click', '.next10',()=>{ 
    $('#text').append("<div id='p11show' class='textDiv'>" + p11 + "</div>")
    p11display = true; 
    $('.next10').remove()
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})

//p11 "the captain"
$('#textContainer').on('click', '.captain11', ()=>{
    if(!p12display){
        $('#text').append("<div id='p12show' class='textDiv'>" + p12 + "</div>")
    } 
    $('.captain11').addClass('clickedLink')
    p12display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p12 "authoritative"
$('#textContainer').on('click', '.auth12', ()=>{
    if(!p14display){
        $('#text').append("<div id='p14show' class='textDiv'>" + p14 + "</div>")
    } 
    $('.auth12').addClass('clickedLink')
    p14display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})

//p14 "giggling"
$('#textContainer').on('click', '.giggle14', ()=>{
    if(!p15display){
        $('#text').append("<div id='p15show' class='textDiv'>" + p15 + "</div>")
    } 
    $('.giggle14').addClass('clickedLink')
    p15display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})

//p15 "was"
$('#textContainer').on('click', '.was15', ()=>{
    if(!p16display){
        $('#text').append("<div id='p16show' class='textDiv'>" + p16 + "</div>")
    } 
    $('.was15').addClass('clickedLink')
    if(p18display){
        $('.travel2miles16').addClass('clickedLink')
    }
    p16display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p15 "wall"
$('#textContainer').on('click', '.wall15', ()=>{
    if(!p17display){
        $('#text').append("<div id='p17show' class='textDiv'>" + p17 + "</div>")
    } 
    $('.wall15').addClass('clickedLink')
    if(p18display){
        $('.heatoff17').addClass('clickedLink')
    }
    p17display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p16 "delay"
$('#textContainer').on('click', '.delay16', ()=>{
    $('.delay16').addClass('clickedLink')
})

//p16 "travel 2 miles"
$('#textContainer').on('click', '.travel2miles16', ()=>{
    if(!p18display){
        $('#text').append("<div id='p18show' class='textDiv'>" + p18 + "</div>")
    } 
    $('.travel2miles16').addClass('clickedLink')
    $('.heatoff17').addClass('clickedLink')
    p18display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p17 "heat shuts off"
$('#textContainer').on('click', '.heatoff17', ()=>{
    if(!p18display){
        $('#text').append("<div id='p18show' class='textDiv'>" + p18 + "</div>")
    } 
    $('.heatoff17').addClass('clickedLink')
    $('.travel2miles16').addClass('clickedLink')
    p18display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p18 "next"
$('#textContainer').on('click', '.next18', ()=>{
    if(!p19display){
        $('#text').append("<div id='p19show' class='textDiv'>" + p19 + "</div>")
    } 
    $('.next18').remove()
    p19display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})

//p19 "impatient"
$('#textContainer').on('click', '.impatient19', ()=>{
    if(!p20display){
        $('#text').append("<div id='p20show' class='textDiv'>" + p20 + "</div>")
    } 
    $('.impatient19').addClass('clickedLink')
    p20display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p20 "next"
$('#textContainer').on('click', '.next20', ()=>{
    if(!p22display){
        $('#text').append("<div id='p22show' class='textDiv'>" + p22 + "</div>")
    } 
    $('.next20').remove()
    p22display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p22 "i missed you"
$('#textContainer').on('click', '.missed22', ()=>{
    if(!p23display){
        $('#text').append("<div id='p23show' class='textDiv'>" + p23 + "</div>")
    } 
    $('.missed22').addClass('clickedLink')
    p23display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})

//p23 "Peak"
$('#textContainer').on('click', '.peak23', ()=>{
    if(!p24display){
        $('#text').append("<div id='p24show' class='textDiv'>" + p24 + "</div>")
    } 
    $('.peak23').addClass('clickedLink')
    p24display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p24 'plateau'
$('#textContainer').on('click', '.plateau24', ()=>{
    if(!p25display){
        $('#text').append("<div id='p25show' class='textDiv'>" + p25 + "</div>")
        $('.noLink').removeClass('noLink')
        $('.gainHour08').addClass('clickedLink')

        p25display = true
    } else {
        $('#text').append("<div id='p26show' class='textDiv'>" + p26 + "</div>")
        p26display = true
    }
    $('.plateau24').addClass('clickedLink')
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p25 'love'
$('#textContainer').on('click', '.love25', ()=>{
    // check if 25 have noLink as class
    let classNames =  $('.love25').attr('class')
    // console.log(classNames)
    if(!p26display){
        $('#text').append("<div id='p26show' class='textDiv'>" + p26 + "</div>")
    } 
    p26display = true
    $('.love25').addClass('clickedLink')
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p26 "burnt"
$('#textContainer').on('click', '.burned26', ()=>{
    if(!p27display){
        $('#text').append("<div id='p27show' class='textDiv'>" + p27 + "</div>")
    } 
    if(p29display){
        $('.flying27').addClass('clickedLink')
    }
    p27display = true
    $('.burned26').addClass('clickedLink')
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p27 "next"
$('#textContainer').on('click', '.next27', ()=>{
    if(!p28display){
        $('#text').append("<div id='p28show' class='textDiv'>" + p28 + "</div>")
    } 
    if(p29display){
        $('.book28').addClass('clickedLink')
    }
    p28display = true
    $('.next27').remove()
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})



//p27 "flying"
$('#textContainer').on('click', '.flying27', ()=>{
    if(!p29display){
        $('#text').append("<div id='p29show' class='textDiv'>" + p29 + "</div>")
        $('.flying27').addClass('clickedLink')
        $('.book28').addClass('clickedLink')
    } 
    p29display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p28 "book"
$('#textContainer').on('click', '.book28', ()=>{
    if(!p29display){
        $('#text').append("<div id='p29show' class='textDiv'>" + p29 + "</div>")
        $('.flying27').addClass('clickedLink')
        $('.book28').addClass('clickedLink')
    } 
    p29display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p29 "sinking"
$('#textContainer').on('click', '.sinking29', ()=>{
    if(!p31display){
        $('#text').append("<div id='p31show' class='textDiv'>" + p31 + "</div>")
        $('.sinking29').addClass('clickedLink')
    } 
    if(p32display){
        $('.moment31').addClass('clickedLink')
    }
    p31display = true
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p30 'next'
$('#textContainer').on('click', '.next30', ()=>{
    if(!p32display){
        $('#text').append("<div id='p32show' class='textDiv'>" + p32 + "</div>")
    } 
    p32display = true
    $('.next30').remove()
    $('.moment31').addClass('clickedLink')
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})



//p31 "ordered"
$('#textContainer').on('click', '.ordered31', ()=>{
    if(!p30display){
        $('#text').append("<div id='p30show' class='textDiv'>" + p30 + "</div>")
    } 
    if(p32display){
        $('.next30').remove()
    }
    p30display = true
    $('.ordered31').addClass("clickedLink")
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p31 "moment"
$('#textContainer').on('click', '.moment31', ()=>{
    if(!p32display){
        $('#text').append("<div id='p32show' class='textDiv'>" + p32 + "</div>")
    } 
    p32display = true
    $('.next30').remove()
    $('.moment31').addClass("clickedLink")
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})


//p32 "moment"
$('#textContainer').on('click', '.moment32', ()=>{
    if(!p33display){
        $('#text').append("<div id='p33show' class='textDiv'>" + p33 + "</div>")
    } 
    p33display = true
    $('.moment32').addClass("clickedLink")
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})

//p33 'stop'
$('#textContainer').on('click', '.stop33', ()=>{
    if(!p34display){
        $('#text').append("<div id='p34show' class='textDiv'>" + p34 + "</div>")
    } 
    p34display = true
    $('.stop33').addClass("clickedLink")
    $('#textContainer').scrollTop(document.getElementById('textContainer').scrollHeight)
})





// this is the typewriter effect ---------------------
let i = 0
$(document).on('keypress',(e)=>{
    if(typeWriterActive){
        let str = "they are spraying green goo on the wings of the plane, before they started spraying green goo on the wings of the plane. I've seen it before, in Chicago" 
        let strArr = str.split('')
        let typedText = str.substring(0,i)
        i++
        $('#typedText').text(typedText)
        if(i > str.length){
            $('#p07show').html(p07)
            typeWriterActive = false;
        }
    }
})



//intercom change text to button 
$("#textContainer").on('click','.intercom',()=>{
    if(!buttonEnable){
        $('#text').hide();
        let content =  $('#text').text()
        // console.log(content)
        let word = content.split(" ");
        let newButtonArr = word.filter(word =>{
            return word !== "" 
        }).map(word => {
            if(word != "intercom"){
                return "<button>"+ word +"</button>"
            } else {
                return "<button class='intercom intercomButton'>" + word + "</button>"
            }  
        })
        let newHTML = newButtonArr.join("")
        // console.log(newHTML)
        $("#buttonDivBook").replaceWith( "<div id=buttonDivBook>"+ newHTML +"</div>" )
        $('#buttonDivBook').show();
        // console.log($("#buttonDiv"))
        buttonEnable = true;
    } else {
        // console.log(buttonEnable,"this is triggered")
        $('#buttonDivBook').hide()
        $('#text').show();
        buttonEnable = false 
    }
})


// change time zone functions -----------------------------------------
//change time when "NY" is clicked 
$(".nyTime").on('click',()=>{
    zone = "America/New_York"
    timeArray.push(displayedTime)
})


//change time when "CHI" is clicked
$('#textContainer').on('click','.chiTime',()=>{
    zone = "America/Chicago"
    timeArray.push(displayedTime)
})

//change time when Connectict is clicked 
$('#textContainer').on('click','.connecticutTime',()=>{
    zone = "America/New_York"
    timeArray.push(displayedTime)
    $('.connecticutTime').addClass('clickedLink')
})

//change Time to 11PM NY time when Clicked 
$('#textContainer').on('click','.11pmNYTime',()=>{
    zone = "America/New_York"
    dateChange = "ny11pm"
    timeArray.push(displayedTime)
    $('.11pmNYTime').addClass('clickedLink')
})


//change Time to 12PM NY time when Clicked 
$('#textContainer').on('click','.12pmNYTime',()=>{
    zone = "America/New_York"
    dateChange = "ny12pm"
    timeArray.push(displayedTime)
    $('.12pmNYTime').addClass('clickedLink')
})



//when delay function clicks ----- can have multiple delays and can be clicked multiple times 
$('#textContainer').on('click',".delay",()=>{
    enableDelay ++
    // console.log("clicked", enableDelay)
    timeArray.push(displayedTime)
})

//delayanhour and 15mins
$('#textContainer').on('click',".hour15min16",()=>{
    hour15minM = 15
    hour15minH = 1
    // console.log("clicked", enableDelay)
    $('.hour15min16').addClass('clickedLink')
    timeArray.push(displayedTime)
})

//when loseHour function clicks ----- can have multiple delays and can be clicked multiple times 
$("#textContainer").on('click',".loseHour",()=>{
    loseHour ++
    col -=10
    a +=0.1
    let color = "rgba("+col.toString() +","+ col.toString()+ "," + col.toString()+ "," + a.toString() +  ")"
    $("#bookContainer").css('background-color',color)
    // console.log("clicked", enableDelay)
    timeArray.push(displayedTime)
})

//when gainHour function clicks ----- can have multiple delays and can be clicked multiple times 
$("#textContainer").on('click','.gainHour',()=>{
    gainHour ++
    col +=10
    a -=0.1
    let color = "rgb("+col.toString() +","+ col.toString()+ "," + col.toString()+ "," + a.toString() +  ")"
    $("#bookContainer").css('background-color',color) 
    // console.log("clicked", enableDelay)
    timeArray.push(displayedTime)
})


// bug time change is a bit weird