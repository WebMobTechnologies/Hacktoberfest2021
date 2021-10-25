import 'package:flutter/material.dart';
import 'dart:ui' as ui;

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home:DrawApp(),
    );
  }
}

class DrawApp extends StatefulWidget {
  const DrawApp({Key? key}) : super(key: key);

  @override
  _DrawAppState createState() => _DrawAppState();
}

class _DrawAppState extends State<DrawApp> {
  // offset points
  List points = [];
  //color of the pen
  Color? color;
  //stroke width
  double strokeWidth = 2.0;
  //key
  GlobalKey globalKey = GlobalKey();
  //uuid generator generates unique id
  // Uuid uuid = Uuid();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("WebMob Drawing App"),
      ),
      body: Stack(
        children: [
          Container(
            decoration: BoxDecoration(
              color: Colors.black,
            ),
          ),
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.all(Radius.circular(20.0)),
                    boxShadow: [
                      BoxShadow(
                          color: Colors.black.withOpacity(0.4),
                          // color of the  box shadow
                          blurRadius: 5.0,
                          spreadRadius: 1.0)
                    ],
                  ),
                  child: GestureDetector(
                    onPanDown: (details) {
                      setState(() {});
                    },
                    onPanUpdate: (details) {
                      setState(() {});
                    },
                    onPanEnd: (details) {
                      setState(() {});
                    },
                    child: ClipRRect(
                      child: CustomPaint(
                          //painter classs goes here
                          ),
                    ),
                  ),
                ),
                SizedBox(
                  height: 15,
                ),
                Container(
                  decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(20.0)),
                  width: MediaQuery.of(context).size.width * 0.80,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Expanded(
                        child: Slider(
                          min: 1.0,
                          max: 5.0,
                          activeColor: color,
                          value: strokeWidth,
                          onChanged: (double value) {
                            this.setState(() {
                              strokeWidth = value;
                            });
                          },
                        ),
                      ),
                      IconButton(
                          onPressed: () {
                            setState(() {
                              points.clear();
                            });
                          },
                          icon: Icon(
                            Icons.phonelink_erase_rounded,
                            color: color,
                          )),
                      IconButton(
                          onPressed: () {
                            // pickColor(context);
                          },
                          icon: Icon(
                            Icons.color_lens,
                            color: color,
                          )),
                      IconButton(
                          onPressed: () {
                            ScaffoldMessenger.of(context).showSnackBar(
                                SnackBar(content: Text("Button pressed")));
                            setState(() {
                              // _save();
                            });
                          },
                          icon: Icon(Icons.save))
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
