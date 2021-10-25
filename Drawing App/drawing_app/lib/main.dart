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
      home: MyHomePage(title: 'Drawing App'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title:  Text(widget.title),
      ),
      body: Center(

        child: Column(

          mainAxisAlignment: MainAxisAlignment.center,
          children: const <Widget>[
            Text(
              'Canvas Project',
            ),
          ],
        ),
      ),
   // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
class DrawApp extends StatefulWidget {
  const DrawApp({Key? key}) : super(key: key);

  @override
  _DrawAppState createState() => _DrawAppState();
}

class _DrawAppState extends State<DrawApp> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title:  Text("WebMob Drawing App"),
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
                            color: Colors.black.withOpacity(0.4),// color of the  box shadow
                            blurRadius: 5.0,
                            spreadRadius: 1.0
                        )
                      ],
                  ),
                  child: GestureDetector(
                    onPanDown: (details){
                    setState(() {

                    });
                    },
                    onPanUpdate: (details){
                      setState(() {

                      });
                    },
                    onPanEnd: (details){
                      setState(() {

                      });
                    },
                    child: ClipRRect(
                      child: CustomPaint(
                       //painter classs goes here
                      ),
                    ),
                  ),

                )
              ],
            ),
          ),
        ],
      ),
    );
  }
}


