    var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['data1', 30],
            ['data2', 120],
            ['data3', 20],
            ['data4', 130]
        ],
        type : 'donut'
    },
    donut: {
        title: "Total : 5030"
    }
});





    var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['data1', 30],
            ['data2', 120],
            ['data3', 20],
            ['data4', 130],
            ['data5', 340],
            ['data6', 180]
        ],
        type : 'donut'
        ,
        names: {
            data1: 'แผนก A',
            data2: 'แผนก B',
            data3: 'แผนก C',
            data4: 'แผนก D',
            data5: 'แผนก E',
            data6: 'แผนก F'
        }
    },
    donut: {
        title: "Total : 5030"
    }
});

var mo = c3.generate({
    bindto: '#mo',
    data: {
        x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '2016-01-01', '2016-01-02', '2016-01-03', '2016-01-04', '2016-01-05',
             '2016-01-06', '2016-01-07', '2016-01-08', '2016-01-09', '2016-01-10', '2016-01-11', '2016-01-12'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['data1', 350, 200, 100, 400, 150, 250, 100, 400, 150, 250],
            ['data2', 130, 340, 200, 500, 250, 350, 200, 500, 250, 350],
            ['data3', 400, 500, 450, 700, 600, 500, 650, 400, 400, 590],
            ['data4', 190, 200, 650, 400, 400, 590, 450, 700, 600, 500],
            ['data5', 200, 300, 400, 500, 600, 700, 200, 500, 250, 350],
            ['data6', 100, 200, 250, 400, 400, 350, 400, 500, 600, 700]
        ],
        names: {
            data1: 'แผนก A',
            data2: 'แผนก B',
            data3: 'แผนก C',
            data4: 'แผนก D',
            data5: 'แผนก E',
            data6: 'แผนก F'
        }
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%d'
            }
        }
    }
});


var year = c3.generate({
     bindto: '#year',
    data: {
        x: 'x',
        columns: [
            ['x', 2012, 2013, 2014, 2015, 2016],
            ['data1', 2000, 2500, 2100, 2900, 2050],
            ['data2', 3000, 2800, 2500, 2400, 2250],
            ['data3', 2500, 2000, 2600, 2700, 2050],
            ['data4', 2300, 3000, 3200, 2600, 2250],
            ['data5', 3300, 3500, 4100, 3000, 2050],
            ['data6', 2900, 2800, 4200, 3500, 2250]
        ],types: {
            data1: 'bar',
            data2: 'bar',
            data3: 'bar',
            data4: 'bar',
            data5: 'bar',
            data6: 'bar'
        },
        names: {
            data1: 'แผนก A',
            data2: 'แผนก B',
            data3: 'แผนก C',
            data4: 'แผนก D',
            data5: 'แผนก E',
            data6: 'แผนก F'
        }
    }
});




    
    
  d3.select("#fillgauge1").call(d3.liquidfillgauge, 55);
    d3.select("#fillgauge2").call(d3.liquidfillgauge, 28 );
    d3.select("#fillgauge3").call(d3.liquidfillgauge, 60.1, {

    //   circleThickness: 0.1,
    //   circleFillGap: 0.2,    
      textVertPosition: 0.8,
      waveAnimateTime: 2000,
      waveHeight: 0.3,
      waveCount: 1
    });
    d3.select("#fillgauge4").call(d3.liquidfillgauge, 50, {
      textVertPosition: 0.8,
      waveAnimateTime: 5000,
      waveHeight: 0.15,
      waveOffset: 0.25,
      displayPercent: true
    });
    d3.select("#fillgauge5").call(d3.liquidfillgauge, 60.44, {
      textVertPosition: 0.8,
      waveAnimateTime: 5000,
      waveHeight: 0.15,
      waveOffset: 0.25,
      displayPercent: true
    });
    d3.select("#fillgauge6").call(d3.liquidfillgauge, 120, {
      textVertPosition: 0.8,
      waveAnimateTime: 5000,
      waveHeight: 0.15,
      waveOffset: 0.25,
      displayPercent: true
    });

    setInterval(function() {
      d3.select("#fillgauge1").on("valueChanged")(Math.floor(Math.random() * 100));
      d3.select("#fillgauge2").on("valueChanged")(Math.floor(Math.random() * 100));
      d3.select("#fillgauge3").on("valueChanged")(Math.floor(Math.random() * 100));
      d3.select("#fillgauge4").on("valueChanged")(Math.floor(Math.random() * 100));
      d3.select("#fillgauge5").on("valueChanged")(Math.floor(Math.random() * 100));
      d3.select("#fillgauge6").on("valueChanged")(Math.floor(Math.random() * 150));
    }, 2000);
    
    
    // var gauge1 = loadLiquidFillGauge("fillgauge1", 55);
    // var config1 = liquidFillGaugeDefaultSettings();
    // config1.circleColor = "#FF7777";
    // config1.textColor = "#FF4444";
    // config1.waveTextColor = "#FFAAAA";
    // config1.waveColor = "#FFDDDD";
    // config1.circleThickness = 0.2;
    // config1.textVertPosition = 0.2;
    // config1.waveAnimateTime = 1000;

    // var gauge2= loadLiquidFillGauge("fillgauge2", 28, config1);
    // var config2 = liquidFillGaugeDefaultSettings();
    // config2.circleColor = "#D4AB6A";
    // config2.textColor = "#553300";
    // config2.waveTextColor = "#805615";
    // config2.waveColor = "#AA7D39";
    // config2.circleThickness = 0.1;
    // config2.circleFillGap = 0.2;
    // config2.textVertPosition = 0.8;
    // config2.waveAnimateTime = 2000;
    // config2.waveHeight = 0.3;
    // config2.waveCount = 1;

    // var gauge3 = loadLiquidFillGauge("fillgauge3", 60.1, config2);
    // var config3 = liquidFillGaugeDefaultSettings();
    // config3.textVertPosition = 0.8;
    // config3.waveAnimateTime = 5000;
    // config3.waveHeight = 0.15;
    // config3.waveAnimate = true;
    // config3.waveOffset = 0.25;
    // config3.valueCountUp = false;
    // config3.displayPercent = true;

    // var gauge4 = loadLiquidFillGauge("fillgauge4", 50, config3);
    // var config4 = liquidFillGaugeDefaultSettings();
    // config4.circleThickness = 0.15;
    // config4.circleColor = "#808015";
    // config4.textColor = "#555500";
    // config4.waveTextColor = "#FFFFAA";
    // config4.waveColor = "#AAAA39";
    // config4.textVertPosition = 0.8;
    // config4.waveAnimateTime = 1000;
    // config4.waveHeight = 0.05;
    // config4.waveAnimate = true;
    // config4.waveRise = false;
    // config4.waveHeightScaling = false;
    // config4.waveOffset = 0.25;
    // config4.textSize = 0.75;
    // config4.waveCount = 3;

    // var gauge5 = loadLiquidFillGauge("fillgauge5", 60.44, config4);
    // var config5 = liquidFillGaugeDefaultSettings();
    // config5.circleThickness = 0.4;
    // config5.circleColor = "#6DA398";
    // config5.textColor = "#0E5144";
    // config5.waveTextColor = "#6DA398";
    // config5.waveColor = "#246D5F";
    // config5.textVertPosition = 0.52;
    // config5.waveAnimateTime = 5000;
    // config5.waveHeight = 0;
    // config5.waveAnimate = false;
    // config5.waveCount = 2;
    // config5.waveOffset = 0.25;
    // config5.textSize = 1.2;
    // config5.minValue = 30;
    // config5.maxValue = 150
    // config5.displayPercent = false;
    
    // var gauge6 = loadLiquidFillGauge("fillgauge6", 120, config5);

    // function NewValue(){
    //     if(Math.random() > .5){
    //         return Math.round(Math.random()*100);
    //     } else {
    //         return (Math.random()*100).toFixed(1);
    //     }
    // }