/******************************************************
*
*
*
*
*                                                                                                                    
*                                                                                                                  
*    FFFFFFFFFFFFFFFFFFFFFF                lllllll lllllll                                           tttt          
*    F::::::::::::::::::::F                l:::::l l:::::l                                        ttt:::t          
*    F::::::::::::::::::::F                l:::::l l:::::l                                        t:::::t          
*    FF::::::FFFFFFFFF::::F                l:::::l l:::::l                                        t:::::t          
*      F:::::F       FFFFFFaaaaaaaaaaaaa    l::::l  l::::l    ooooooooooo   uuuuuu    uuuuuuttttttt:::::ttttttt    
*      F:::::F             a::::::::::::a   l::::l  l::::l  oo:::::::::::oo u::::u    u::::ut:::::::::::::::::t    
*      F::::::FFFFFFFFFF   aaaaaaaaa:::::a  l::::l  l::::l o:::::::::::::::ou::::u    u::::ut:::::::::::::::::t    
*      F:::::::::::::::F            a::::a  l::::l  l::::l o:::::ooooo:::::ou::::u    u::::utttttt:::::::tttttt    
*      F:::::::::::::::F     aaaaaaa:::::a  l::::l  l::::l o::::o     o::::ou::::u    u::::u      t:::::t          
*      F::::::FFFFFFFFFF   aa::::::::::::a  l::::l  l::::l o::::o     o::::ou::::u    u::::u      t:::::t          
*      F:::::F            a::::aaaa::::::a  l::::l  l::::l o::::o     o::::ou::::u    u::::u      t:::::t          
*      F:::::F           a::::a    a:::::a  l::::l  l::::l o::::o     o::::ou:::::uuuu:::::u      t:::::t    tttttt
*    FF:::::::FF         a::::a    a:::::a l::::::ll::::::lo:::::ooooo:::::ou:::::::::::::::uu    t::::::tttt:::::t
*    F::::::::FF         a:::::aaaa::::::a l::::::ll::::::lo:::::::::::::::o u:::::::::::::::u    tt::::::::::::::t
*    F::::::::FF          a::::::::::aa:::al::::::ll::::::l oo:::::::::::oo   uu::::::::uu:::u      tt:::::::::::tt
*    FFFFFFFFFFF           aaaaaaaaaa  aaaallllllllllllllll   ooooooooooo       uuuuuuuu  uuuu        ttttttttttt  
*
*    NNNNNNNN        NNNNNNNN                                                                
*    N:::::::N       N::::::N                                                                
*    N::::::::N      N::::::N                                                                
*    N:::::::::N     N::::::N                                                                
*    N::::::::::N    N::::::N    eeeeeeeeeeee  wwwwwww           wwwww           wwwwwww     
*    N:::::::::::N   N::::::N  ee::::::::::::ee w:::::w         w:::::w         w:::::w      
*    N:::::::N::::N  N::::::N e::::::eeeee:::::eew:::::w       w:::::::w       w:::::w       
*    N::::::N N::::N N::::::Ne::::::e     e:::::e w:::::w     w:::::::::w     w:::::w        
*    N::::::N  N::::N:::::::Ne:::::::eeeee::::::e  w:::::w   w:::::w:::::w   w:::::w         
*    N::::::N   N:::::::::::Ne:::::::::::::::::e    w:::::w w:::::w w:::::w w:::::w          
*    N::::::N    N::::::::::Ne::::::eeeeeeeeeee      w:::::w:::::w   w:::::w:::::w           
*    N::::::N     N:::::::::Ne:::::::e                w:::::::::w     w:::::::::w            
*    N::::::N      N::::::::Ne::::::::e                w:::::::w       w:::::::w             
*    N::::::N       N:::::::N e::::::::eeeeeeee         w:::::w         w:::::w              
*    N::::::N        N::::::N  ee:::::::::::::e          w:::w           w:::w               
*    NNNNNNNN         NNNNNNN    eeeeeeeeeeeeee           www             www                
*
*    VVVVVVVV           VVVVVVVV                                                                     
*    V::::::V           V::::::V                                                                     
*    V::::::V           V::::::V                                                                     
*    V::::::V           V::::::V                                                                     
*     V:::::V           V:::::V eeeeeeeeeeee       ggggggggg   ggggg aaaaaaaaaaaaa      ssssssssss   
*      V:::::V         V:::::Vee::::::::::::ee    g:::::::::ggg::::g a::::::::::::a   ss::::::::::s  
*       V:::::V       V:::::Ve::::::eeeee:::::ee g:::::::::::::::::g aaaaaaaaa:::::ass:::::::::::::s 
*        V:::::V     V:::::Ve::::::e     e:::::eg::::::ggggg::::::gg          a::::as::::::ssss:::::s
*         V:::::V   V:::::V e:::::::eeeee::::::eg:::::g     g:::::g    aaaaaaa:::::a s:::::s  ssssss 
*          V:::::V V:::::V  e:::::::::::::::::e g:::::g     g:::::g  aa::::::::::::a   s::::::s      
*           V:::::V:::::V   e::::::eeeeeeeeeee  g:::::g     g:::::g a::::aaaa::::::a      s::::::s   
*            V:::::::::V    e:::::::e           g::::::g    g:::::ga::::a    a:::::assssss   s:::::s 
*             V:::::::V     e::::::::e          g:::::::ggggg:::::ga::::a    a:::::as:::::ssss::::::s
*              V:::::V       e::::::::eeeeeeee   g::::::::::::::::ga:::::aaaa::::::as::::::::::::::s 
*               V:::V         ee:::::::::::::e    gg::::::::::::::g a::::::::::aa:::as:::::::::::ss  
*                VVV            eeeeeeeeeeeeee      gggggggg::::::g  aaaaaaaaaa  aaaa sssssssssss    
*                                                           g:::::g                                  
*                                               gggggg      g:::::g                                  
*                                               g:::::gg   gg:::::g                                  
*                                                g::::::ggg:::::::g                                  
*                                                 gg:::::::::::::g                                   
*                                                   ggg::::::ggg                                     
*                                                      gggggg                                         
*
*                                                                                
*   
*  
*
*  (Fallout New Vegas Console Cracking Tool)
*
*  Proof of concept v1.0 
*
*  Objective: http://youtu.be/VzXNg8CRvm8?t=1m10s
*
*******************************************************/


var dom=function(id){
    return document.getElementById(id);
}                   //end $ function

var that = this;
var wordList = []                                                                               //create array for all words
var score                                                                                       //create score variable

var update_word_list = function() {                                                             //sych textarea with content of wordlist array
    if(wordList.length == 0){                                                                   //if nothing in aray
        dom("word_list").value = "";                                                            //set textarea value to empty string
    }else{                                                                                      //otherwise
        var list_for_textarea="";                                                               //create a variable to hold a string
        for( var i in wordList){                                                                //for each index in the worList array
           list_for_textarea += wordList[i] + "\n";                                             //append array values to textarea variable
        }           //end of for loop
        dom("word_list").value = list_for_textarea;                                             //set textarea elemnt to variable
    }               //end of if loop
}                   //end of update_word_list


var key_word_click = function() {                                                               //key_word is the word to test against
    var key = prompt("Please enter the word you entered as first password guess","");           //prompt(prompt_text, default_value)
    if((key != null) && (key != "")){
        wordList[0] = key;
        update_word_list();
    }               //end if statement
}                   //end key_word_click function

var add_word_click = function() {                                                               //add_word is used to add other words to wordList Array
    var addWord = prompt("Please enter a possible answer","");
    if((addWord != null) && (addWord != "")){
        wordList[wordList.length] = addWord;                                                    //length is equal to the number of values in the array
        update_word_list();
    }               //end if statement
}                   //end add_word_click function

var add_score_click = function() {
    score = prompt("How many letters are in the right possition?","");
    if((score != null) && (score != ""))  {                                                     
        if(isNaN(score)){                                                                       //a way to ensure that score is a number
            alert("Why you no use number?")
        }else{
            dom("score_list").value = score;
            score = parseFloat(score);
            return this.score;
            }       //end nested if
    }               //end if statement
}                   //end add_score_click function

/*******************************************************************************
 *******************************************************************************
 * 
 * This is where the fun begins.  
 * 
 * The goal is to check the string value of each letter for each word that
 *      has been entered into the "console"
 * 
 * 
 * 
 ******************************************************************************* 
 ******************************************************************************/
var calculate_click = function() {
    if (((wordList != null) && (wordList !="")) && ((score != null) && (score != ""))) {        //make sure there are values entered

        for (var i in wordList){
            wordList[i] = wordList[i].split("");                                                //split method breaks array value into it's elements.  
                                                                                                //in this case characters. (way easier than charAt.  
                                                                                                //Believe me, I tried. And got it to work but it took 5 
                                                                                                //lines of code)

            console.log(wordList[i].join());                //DEBUG to ensure the array value has been split into an array of letters
        }
    }else{                                                                                      //if there are no values in wordList array or score do this.
        alert("Why you no use calculator correct?")
    };              //end if statement
   
    //console.log(wordList[0][2]);                          //DEBUG to make sure I am addressing array of array properly

    /*****************************************
    *
    * Here is where the checking of string values should take place.  
    * ?Should I have made the key it's own object?
    *         nope!  I can get the scores!!!!
    *
    *****************************************/
    var allScores = [];                                                                         //array for holding the scores
    for(var v in wordList){                                                                     //step through values in wordList
        var l = 0;
        var matchScore = 0;                                                                     //create matching score variable
        for(var l in wordList[v]){                                                              //step through values in each wordlist value
            if(wordList[0][l] !== wordList[v][l]){
                //console.log(v + " " + l);                 //DEBUG to ensure that both for statements are advancing through the arrays.
            } else {
                matchScore++;                                                                   //increment matchscore
                //console.log(v + " " + l);                 //DEBUG to ensure that both for statements are advancing through the arrays.            
            }       //end if/else new word letter equals key word letters
        }           //end for l in wordList[v]
        allScores[v] = matchScore;                                                              //put matchscore into allScores array
    }               //end for v in wordList
    console.log("word sores are: " + allScores.join("-"));  //DEBUG to ensure scores are being calculated correctly.
    
    /************************************************
    *
    * Scores are tallied.  Let's see the results.
    *
    *
    **************************************************/
    var answers_for_textarea = "Results are:" + "\n";
    for(var m in allScores){
        console.log(score);                                 //DEBUG to ensure that score is pulled from add_score_click function
        if(allScores[m] === score){                                                       //Why for this not working?  
            answers_for_textarea += wordList[m].join("") + "\n";
        } else {
            console.log(allScores[m]);                      //DEBUG to see what values are being checked in allScores
            console.log("not a possibility");
            //answers_for_textarea += "that didn't work - Bobcat Goldthwait" + "\n"               //This line has zero value.  It's only here to humor me while I suffer figuring this out
        }
        dom("word_list").value = answers_for_textarea; 
    }               //end for m in allScores
}                   //end calculate_click function



window.onload = function(){                                                                     //activate the buttons!
    dom("key_word").onclick = key_word_click;
    dom("add_word").onclick = add_word_click;
    dom("add_score").onclick = add_score_click;
    dom("calculate").onclick = calculate_click;
    update_word_list();
}                   //end of onload button activation function
