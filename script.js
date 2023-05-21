//     // Change the color of the circles after 3 seconds
//     setTimeout(() => {
//       changeColor(circles[0], 'green');  // Change color of the first circle to green
//       changeColor(circles[1], 'red');    // Change color of the second circle to red
//       changeColor(circles[2], 'yellow'); // Change color of the third circle to yellow
//     }, 3000); // 3000 milliseconds (3 seconds)
//   });

function changeColor(circleElement, color) {
  circleElement.style.backgroundColor = color;
}

function manualControl() {
  // Get the circle elements
  const circles = document.querySelectorAll(".circle");
    changeColor(circles[0], "grey");
    changeColor(circles[1], "grey");
    changeColor(circles[4], "grey");
    changeColor(circles[5], "grey");
    changeColor(circles[7], "grey");
    changeColor(circles[8], "grey");
    changeColor(circles[10], "grey");
    changeColor(circles[11], "grey");

    for (let i = 45; i >= 0; i--) {
      setTimeout(function () {
        document.getElementById("tb1").value = "Lane 1 Timer : " + i;
      }, (45 - i) * 1000);
    }

    for (let i = 45; i >= 0; i--) {
      setTimeout(function () {
        document.getElementById("tb2").value = "Lane 2 Timer : " + i;
      }, (45 - i) * 1000);
    }

    for (let i = 90; i >= 45; i--) {
      setTimeout(function () {
        document.getElementById("tb3").value = "Lane 3 Timer : " + i;
      }, (90 - i) * 1000);
    }

    for (let i = 135; i >= 90; i--) {
      setTimeout(function () {
        document.getElementById("tb4").value = "Lane 4 Timer : " + i;
      }, (135 - i) * 1000);
    }

  }

  setTimeout(function () {
    changeColor(circles[0], "red");
    changeColor(circles[1], "grey");
    changeColor(circles[2], "grey");
    changeColor(circles[3], "grey");
    changeColor(circles[5], "green");
    changeColor(circles[7], "grey");
    changeColor(circles[8], "grey");
    changeColor(circles[10], "grey");
    changeColor(circles[11], "grey");

    for (let i = 135; i >= 90; i--) {
      setTimeout(function () {
        document.getElementById("tb1").value = "Lane 1 Timer : " + i;
      }, (135 - i) * 1000);
    }

    for (let i = 45; i >= 0; i--) {
      setTimeout(function () {
        document.getElementById("tb2").value = "Lane 2 Timer : " + i;
      }, (45 - i) * 1000);
    }

    for (let i = 45; i >= 0; i--) {
      setTimeout(function () {
        document.getElementById("tb3").value = "Lane 3 Timer : " + i;
      }, (45 - i) * 1000);
    }

    for (let i = 90; i >= 45; i--) {
      setTimeout(function () {
        document.getElementById("tb4").value = "Lane 4 Timer : " + i;
      }, (90 - i) * 1000);
    }
  }, 45000 );

  setTimeout(function () {
    changeColor(circles[0], "red");
    changeColor(circles[1], "grey");
    changeColor(circles[2], "grey");
    changeColor(circles[3], "red");
    changeColor(circles[5], "grey");
    changeColor(circles[6], "grey");
    changeColor(circles[7], "grey");
    changeColor(circles[8], "green");
    changeColor(circles[10], "grey");
    changeColor(circles[11], "grey");

    for (let i = 90; i >= 45; i--) {
      setTimeout(function () {
        document.getElementById("tb1").value = "Lane 1 Timer : " + i;
      }, (90 - i) * 1000);
    }

    for (let i = 135; i >= 90; i--) {
      setTimeout(function () {
        document.getElementById("tb2").value = "Lane 2 Timer : " + i;
      }, (135 - i) * 1000);
    }

    for (let i = 45; i >= 0; i--) {
      setTimeout(function () {
        document.getElementById("tb3").value = "Lane 3 Timer : " + i;
      }, (45 - i) * 1000);
    }

    for (let i = 45; i >= 0; i--) {
      setTimeout(function () {
        document.getElementById("tb4").value = "Lane 4 Timer : " + i;
      }, (45 - i) * 1000);
    }
  }, 90000 );

  setTimeout(function () {
    changeColor(circles[0], "red");
    changeColor(circles[1], "grey");
    changeColor(circles[2], "grey");
    changeColor(circles[3], "red");
    changeColor(circles[5], "grey");
    changeColor(circles[6], "red");
    changeColor(circles[7], "grey");
    changeColor(circles[8], "grey");
    changeColor(circles[9], "grey");
    changeColor(circles[11], "green");

    for (let i = 45; i >= 0; i--) {
      setTimeout(function () {
        document.getElementById("tb1").value = "Lane 1 Timer : " + i;
      }, (45 - i) * 1000);
    }

    for (let i = 90; i >= 45; i--) {
      setTimeout(function () {
        document.getElementById("tb2").value = "Lane 2 Timer : " + i;
      }, (90 - i) * 1000);
    }

    for (let i = 135; i >= 90; i--) {
      setTimeout(function () {
        document.getElementById("tb3").value = "Lane 3 Timer : " + i;
      }, (135 - i) * 1000);
    }

    for (let i = 45; i >= 0; i--) {
      setTimeout(function () {
        document.getElementById("tb4").value = "Lane 4 Timer : " + i;
      }, (45 - i) * 1000);
    }
  }, 135000 );


function autoControl(){

  const circles = document.querySelectorAll(".circle");
  setTimeout(function(){
    changeColor(circles[1], "grey");
    changeColor(circles[2], "grey");
    changeColor(circles[3], "grey");
    changeColor(circles[4], "grey");
    changeColor(circles[7], "grey");
    changeColor(circles[8], "grey");
    changeColor(circles[10], "grey");
    changeColor(circles[11], "grey");

    for (let i = 45; i >= 0; i--) {
      setTimeout(function () {
        document.getElementById("tb1").value = "Lane1T: " + " V:9";
      }, (45 - i) * 1000);
    }

    for (let i = 15; i >=5; i--) {
      setTimeout(function () {
        document.getElementById("tb2").value = "Lane2T: " + i + " V:10";
      }, (15 - i) * 1000);
    }

    for (let i = 90; i >= 45; i--) {
      setTimeout(function () {
        document.getElementById("tb3").value = "Lane3T: " + " V:4";
      }, (90 - i) * 1000);
    }

    for (let i = 135; i >= 90; i--) {
      setTimeout(function () {
        document.getElementById("tb4").value = "Lane4T: " + " V:3";
      }, (135 - i) * 1000);
    }
  }, 500)
    

    setTimeout(function () {
      changeColor(circles[1], "grey");
      changeColor(circles[2], "grey");
      changeColor(circles[3], "grey");
      changeColor(circles[4], "grey");
      changeColor(circles[7], "grey");
      changeColor(circles[8], "grey");
      changeColor(circles[10], "grey");
      changeColor(circles[11], "grey");
  
      for (let i = 45; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb1").value = "Lane1T: " + " V:9";
        }, (45 - i) * 1000);
      }
  
      for (let i = 5; i >=0; i--) {
        setTimeout(function () {
          document.getElementById("tb2").value = "Lane2T: " + i + " V:3";
        }, (5 - i) * 1000);
      }
  
      for (let i = 90; i >= 45; i--) {
        setTimeout(function () {
          document.getElementById("tb3").value = "Lane3T: " + " V:4";
        }, (90 - i) * 1000);
      }
  
      for (let i = 135; i >= 90; i--) {
        setTimeout(function () {
          document.getElementById("tb4").value = "Lane4T: " + " V:13";
        }, (135 - i) * 1000);
      }
    }, 10000 );

    setTimeout(function () {
      changeColor(circles[0], "grey");
      changeColor(circles[1], "grey");
      changeColor(circles[2], "green");
      changeColor(circles[3], "red");
      changeColor(circles[5], "grey");
      changeColor(circles[7], "grey");
      changeColor(circles[8], "grey");
      changeColor(circles[10], "grey");
      changeColor(circles[11], "grey");
  
      for (let i = 20; i >= 15; i--) {
        setTimeout(function () {
          document.getElementById("tb1").value = "Lane1T: " + i + " V:9";
        }, (20 - i) * 1000);
      }
  
      for (let i = 5; i >=0; i--) {
        setTimeout(function () {
          document.getElementById("tb2").value = "Lane2T: " +  " V:3";
        }, (5 - i) * 1000);
      }
  
      for (let i = 90; i >= 45; i--) {
        setTimeout(function () {
          document.getElementById("tb3").value = "Lane3T: " + " V:4";
        }, (90 - i) * 1000);
      }
  
      for (let i = 135; i >= 90; i--) {
        setTimeout(function () {
          document.getElementById("tb4").value = "Lane4T: " + " V:13";
        }, (135 - i) * 1000);
      }
    }, 15000 );

    setTimeout(function () {
      changeColor(circles[0], "grey");
      changeColor(circles[1], "grey");
      changeColor(circles[2], "green");
      changeColor(circles[3], "red");
      changeColor(circles[5], "grey");
      changeColor(circles[7], "grey");
      changeColor(circles[8], "grey");
      changeColor(circles[10], "grey");
      changeColor(circles[11], "grey");
  
      for (let i = 15; i >= 5; i--) {
        setTimeout(function () {
          document.getElementById("tb1").value = "Lane1T : " + i + " V:9";
        }, (15 - i) * 1000);
      }
  
      for (let i = 5; i >=0; i--) {
        setTimeout(function () {
          document.getElementById("tb2").value = "Lane2T: " + " V:3";
        }, (5 - i) * 1000);
      }
  
      for (let i = 90; i >= 45; i--) {
        setTimeout(function () {
          document.getElementById("tb3").value = "Lane3T: " + " V:15";
        }, (90 - i) * 1000);
      }
  
      for (let i = 135; i >= 90; i--) {
        setTimeout(function () {
          document.getElementById("tb4").value = "Lane4T: " + " V:13";
        }, (135 - i) * 1000);
      }
    }, 20000 );

    setTimeout(function () {
      changeColor(circles[0], "grey");
      changeColor(circles[1], "grey");
      changeColor(circles[2], "green");
      changeColor(circles[3], "red");
      changeColor(circles[5], "grey");
      changeColor(circles[7], "grey");
      changeColor(circles[8], "grey");
      changeColor(circles[10], "grey");
      changeColor(circles[11], "grey");
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb1").value = "Lane1T: " + i + " V:3";
        }, (5 - i) * 1000);
      }
  
      for (let i = 5; i >=0; i--) {
        setTimeout(function () {
          document.getElementById("tb2").value = "Lane2T: " + " V:7";
        }, (5 - i) * 1000);
      }
  
      for (let i = 90; i >= 45; i--) {
        setTimeout(function () {
          document.getElementById("tb3").value = "Lane3T: " + " V:15";
        }, (90 - i) * 1000);
      }
  
      for (let i = 135; i >= 90; i--) {
        setTimeout(function () {
          document.getElementById("tb4").value = "Lane4T: " + " V:13";
        }, (135 - i) * 1000);
      }
    }, 30000 );

    setTimeout(function () {
      changeColor(circles[0], "red");
      changeColor(circles[2], "grey");
      changeColor(circles[9], "grey");
      changeColor(circles[3], "red");
      changeColor(circles[5], "grey");
      changeColor(circles[7], "grey");
      changeColor(circles[8], "grey");
      changeColor(circles[10], "grey");
      changeColor(circles[11], "green");
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb1").value = "Lane1T : " + " V:3";
        }, (5 - i) * 1000);
      }
  
      for (let i = 5; i >=0; i--) {
        setTimeout(function () {
          document.getElementById("tb2").value = "Lane2T : " + " V:7";
        }, (5 - i) * 1000);
      }
  
      for (let i = 90; i >= 45; i--) {
        setTimeout(function () {
          document.getElementById("tb3").value = "Lane3T : " + " V:15";
        }, (90 - i) * 1000);
      }
  
      for (let i = 20; i >= 15; i--) {
        setTimeout(function () {
          document.getElementById("tb4").value = "Lane4T : " + i + " V:13";
        }, (20 - i) * 1000);
      }
    }, 35000 );

    setTimeout(function () {
      changeColor(circles[0], "red");
      changeColor(circles[2], "grey");
      changeColor(circles[9], "grey");
      changeColor(circles[3], "red");
      changeColor(circles[5], "grey");
      changeColor(circles[7], "grey");
      changeColor(circles[8], "grey");
      changeColor(circles[10], "grey");
      changeColor(circles[11], "green");
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb1").value = "Lane1T : " + " V:3";
        }, (5 - i) * 1000);
      }
  
      for (let i = 5; i >=0; i--) {
        setTimeout(function () {
          document.getElementById("tb2").value = "Lane2T : " + " V:7";
        }, (5 - i) * 1000);
      }
  
      for (let i = 90; i >= 45; i--) {
        setTimeout(function () {
          document.getElementById("tb3").value = "Lane3T : " + " V:15";
        }, (90 - i) * 1000);
      }
  
      for (let i = 15; i >= 5; i--) {
        setTimeout(function () {
          document.getElementById("tb4").value = "Lane4T : " + i + " V:13";
        }, (15 - i) * 1000);
      }
    }, 40000 );

    setTimeout(function () {
      changeColor(circles[0], "red");
      changeColor(circles[2], "grey");
      changeColor(circles[9], "grey");
      changeColor(circles[3], "red");
      changeColor(circles[5], "grey");
      changeColor(circles[7], "grey");
      changeColor(circles[8], "grey");
      changeColor(circles[10], "grey");
      changeColor(circles[11], "green");
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb1").value = "Lane1T : " + " V:3";
        }, (5 - i) * 1000);
      }
  
      for (let i = 5; i >=0; i--) {
        setTimeout(function () {
          document.getElementById("tb2").value = "Lane2T : " + " V:7";
        }, (5 - i) * 1000);
      }
  
      for (let i = 90; i >= 45; i--) {
        setTimeout(function () {
          document.getElementById("tb3").value = "Lane3T : " + " V:15";
        }, (90 - i) * 1000);
      }
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb4").value = "Lane4T : " + i + " V:2";
        }, (5 - i) * 1000);
      }
    }, 50000 );


    setTimeout(function () {
      changeColor(circles[0], "grey");
      changeColor(circles[2], "green");
      changeColor(circles[9], "grey");
      changeColor(circles[3], "red");
      changeColor(circles[5], "grey");
      changeColor(circles[7], "grey");
      changeColor(circles[8], "grey");
      changeColor(circles[10], "grey");
      changeColor(circles[11], "grey");
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb1").value = "Lane1T : " + i + " V:3";
        }, (5 - i) * 1000);
      }
  
      for (let i = 5; i >=0; i--) {
        setTimeout(function () {
          document.getElementById("tb2").value = "Lane2T : " + " V:7";
        }, (5 - i) * 1000);
      }
  
      for (let i = 90; i >= 45; i--) {
        setTimeout(function () {
          document.getElementById("tb3").value = "Lane3T : " + " V:15";
        }, (90 - i) * 1000);
      }
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb4").value = "Lane4T : " + " V:2";
        }, (5 - i) * 1000);
      }
    }, 55000 );

    setTimeout(function () {
      changeColor(circles[0], "grey");
      changeColor(circles[2], "grey");
      changeColor(circles[9], "grey");
      changeColor(circles[3], "red");
      changeColor(circles[5], "grey");
      changeColor(circles[6], "grey");
      changeColor(circles[8], "green");
      changeColor(circles[10], "grey");
      changeColor(circles[11], "grey");
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb1").value = "Lane1T : " + " V:3";
        }, (5 - i) * 1000);
      }
  
      for (let i = 5; i >=0; i--) {
        setTimeout(function () {
          document.getElementById("tb2").value = "Lane2T : " + " V:11";
        }, (5 - i) * 1000);
      }
  
      for (let i = 25; i >= 15; i--) {
        setTimeout(function () {
          document.getElementById("tb3").value = "Lane3T : " + i + " V:15";
        }, (25 - i) * 1000);
      }
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb4").value = "Lane4T : " + " V:2";
        }, (5 - i) * 1000);
      }
    }, 60000 );

    setTimeout(function () {
      changeColor(circles[0], "grey");
      changeColor(circles[2], "grey");
      changeColor(circles[9], "grey");
      changeColor(circles[3], "red");
      changeColor(circles[5], "grey");
      changeColor(circles[6], "grey");
      changeColor(circles[8], "green");
      changeColor(circles[10], "grey");
      changeColor(circles[11], "grey");
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb1").value = "Lane1T : " + " V:3";
        }, (5 - i) * 1000);
      }
  
      for (let i = 5; i >=0; i--) {
        setTimeout(function () {
          document.getElementById("tb2").value = "Lane2T : " + " V:11";
        }, (5 - i) * 1000);
      }
  
      for (let i = 15; i >= 5; i--) {
        setTimeout(function () {
          document.getElementById("tb3").value = "Lane3T : " + i + " V:7";
        }, (15 - i) * 1000);
      }
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb4").value = "Lane4T : " + " V:2";
        }, (5 - i) * 1000);
      }
    }, 70000 );

    setTimeout(function () {
      changeColor(circles[0], "grey");
      changeColor(circles[2], "grey");
      changeColor(circles[9], "grey");
      changeColor(circles[3], "red");
      changeColor(circles[5], "grey");
      changeColor(circles[6], "grey");
      changeColor(circles[8], "green");
      changeColor(circles[10], "grey");
      changeColor(circles[11], "grey");
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb1").value = "Lane1T : " + " V:3";
        }, (5 - i) * 1000);
      }
  
      for (let i = 5; i >=0; i--) {
        setTimeout(function () {
          document.getElementById("tb2").value = "Lane2T : " + " V:11";
        }, (5 - i) * 1000);
      }
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb3").value = "Lane3T : " + i + " V:7";
        }, (5 - i) * 1000);
      }
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb4").value = "Lane4T : " + " V:2";
        }, (5 - i) * 1000);
      }
    }, 80000 );

    setTimeout(function () {
      changeColor(circles[0], "grey");
      changeColor(circles[2], "grey");
      changeColor(circles[9], "grey");
      changeColor(circles[3], "grey");
      changeColor(circles[5], "green");
      changeColor(circles[6], "red");
      changeColor(circles[8], "grey");
      changeColor(circles[10], "grey");
      changeColor(circles[11], "grey");
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb1").value = "Lane1T : " + " V:3";
        }, (5 - i) * 1000);
      }
  
      for (let i = 20; i >=15; i--) {
        setTimeout(function () {
          document.getElementById("tb2").value = "Lane2T : " + i + " V:11";
        }, (20 - i) * 1000);
      }
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb3").value = "Lane3T : " + " V:7";
        }, (5 - i) * 1000);
      }
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb4").value = "Lane4T : " + " V:2";
        }, (5 - i) * 1000);
      }
    }, 85000 );

    setTimeout(function () {
      changeColor(circles[0], "grey");
      changeColor(circles[2], "grey");
      changeColor(circles[9], "grey");
      changeColor(circles[3], "grey");
      changeColor(circles[5], "green");
      changeColor(circles[6], "red");
      changeColor(circles[8], "grey");
      changeColor(circles[10], "grey");
      changeColor(circles[11], "grey");
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb1").value = "Lane1T : " + " V:13";
        }, (5 - i) * 1000);
      }
  
      for (let i = 15; i >=5; i--) {
        setTimeout(function () {
          document.getElementById("tb2").value = "Lane2T : " + i + " V:11";
        }, (15 - i) * 1000);
      }
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb3").value = "Lane3T : " + " V:7";
        }, (5 - i) * 1000);
      }
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb4").value = "Lane4T : " + " V:4";
        }, (5 - i) * 1000);
      }
    }, 90000 );

    setTimeout(function () {
      changeColor(circles[0], "grey");
      changeColor(circles[2], "grey");
      changeColor(circles[9], "grey");
      changeColor(circles[3], "grey");
      changeColor(circles[5], "green");
      changeColor(circles[6], "red");
      changeColor(circles[8], "grey");
      changeColor(circles[10], "grey");
      changeColor(circles[11], "grey");
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb1").value = "Lane1T : " + " V:13";
        }, (5 - i) * 1000);
      }
  
      for (let i = 5; i >=0; i--) {
        setTimeout(function () {
          document.getElementById("tb2").value = "Lane2T : " + i + " V:1";
        }, (5 - i) * 1000);
      }
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb3").value = "Lane3T : " + " V:7";
        }, (5 - i) * 1000);
      }
  
      for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
          document.getElementById("tb4").value = "Lane4T : " + " V:14";
        }, (5 - i) * 1000);
      }
    }, 100000 );
  }
