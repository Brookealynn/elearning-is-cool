//Textbook Chapters
// Chapter 1
var jsonObj = JSON.parse('{"Chapter1" : "A binary search tree is a rooted binary tree, whose internal nodes each store a key (and optionally, an associated value) and each have two distinguished sub-trees,commonly denoted left and right. The tree additionally satisfies the binary search property, which states that the key in each node must be greater than or equal to any key stored in the left sub-tree, and less than or equal to any key stored in the right sub-tree. Frequently, the information represented by each node is a record rather than a single data element. However, for sequencing purposes, nodes are compared according to their keys rather than any part of their associated records. The major advantage of binary search trees over other data structures is that the related sorting algorithms and search algorithms such as in-order traversal can be very efficient; they are also easy to code."}');
document.getElementById("content").innerHTML = jsonObj.Chapter1;

// Chapter 2
var jsonObj2 = JSON.parse('{"Chapter2" : "Searching a binary search tree for a specific key can be programmed recursively or iteratively. We begin by examining the root node. If the tree is null, the key we are searching for does not exist in the tree. Otherwise, if the key equals that of the root, the search is successful and we return the node. If the key is less than that of the root, we search the left subtree. Similarly, if the key is greater than that of the root, we search the right subtree. This process is repeated until the key is found or the remaining subtree is null. If the searched key is not found after a null subtree is reached, then the key is not present in the tree."}');
document.getElementById("content2").innerHTML = jsonObj2.Chapter2;

//Chapter 3 
var jsonObj3 = JSON.parse('{"Chapter3" : "A binary search tree can be used to implement a simple sorting algorithm. We insert all the values we wish to sort into a new ordered data structure—in this case a binary search tree—and then traverse it in order. The worst-case time of binary trees is O(n)^2. There are several schemes for overcoming this flaw with simple binary trees; the most common is the self-balancing binary search tree. If this same procedure is done using such a tree, the overall worst-case time is O(n log n),"}');
document.getElementById("content3").innerHTML = jsonObj3.Chapter3;


//Text to Speech API Talkify.net uses library mozilla*
onload = function() {
    if ('speechSynthesis' in window) with(speechSynthesis) {

        //icons from html
        var playText = document.querySelector('#play');
        var pauseText = document.querySelector('#pause');
        var stopText = document.querySelector('#stop');
        var flag = false;

        //add event listeners to each icon
        playText.addEventListener('click', onClickPlay);
        pauseText.addEventListener('click', onClickPause);
        stopText.addEventListener('click', onClickStop);

        //function to play text
        function onClickPlay() {
            if(!flag){
                flag = true;
                utterance = new SpeechSynthesisUtterance(document.querySelector('article').textContent);
                utterance.voice = getVoices()[0];
                utterance.onend = function(){
                    flag = false; playText.className = pauseText.className = ''; stopText.className = 'stopped';
                };
                playText.className = 'played';
                stopText.className = '';
                speak(utterance);
            }
             if (paused) { /* play text */
                playText.className = 'played';
                pauseText.className = '';
                resume();
            } 
        }

        //function to pause text
        function onClickPause() {
            if(speaking && !paused){ /* pause text */
                pauseText.className = 'paused';
                playText.className = '';
                pause();
            }
        }

        //function to stop text
        function onClickStop() {
            if(speaking){ /* stop reading text */
                stopText.className = 'stopped';
                playText.className = pauseText.className = '';
                flag = false;
                cancel();

            }
        }

    }

    else { /* speech synthesis error */
        errormsg = document.createElement('h1');
        errormsg.textContent = "Text to Speech cannot be played";
        errormsg.style.textAlign = 'left';
        errormsg.style.backgroundColor = 'white';
        errormsg.style.color = 'red';
        errormsg.style.marginTop = errormsg.style.marginBottom = 4;
        document.body.insertBefore(errormsg, document.querySelector('div'));
    }

}

//Scroll to Quiz -- edit
window.smoothScroll = function(target) {
    var scrollContainer = target;
    //find where the text scroll container is
    do { 
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 50;
    do { //find where quiz is in the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 50); //set time
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}