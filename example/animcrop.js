'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  LayoutAnimation,
  TouchableOpacity
} = React;

var CroppingView = React.createClass({
  propTypes: {
    cropTop: React.PropTypes.number,
    cropLeft: React.PropTypes.number,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired
  },
  getDefaultProps() {
    return {
      cropTop: 0,
      cropLeft: 0
    }
  },
  render() {
    return (
      <View style={[{
        position: 'absolute',
        overflow: 'hidden',
        top: this.props.cropTop,
        left: this.props.cropLeft,
        height: this.props.height,
        width: this.props.width,
        backgroundColor: 'transparent'
        }, this.props.style]}>
        <View style={{
          position: 'absolute',
          top: this.props.cropTop * -1,
          left: this.props.cropLeft * -1,
          backgroundColor: 'transparent'
        }}>
          {this.props.children}
        </View>
      </View>
    );
  }
});

var CroppedImage = React.createClass({
  render() {
    return (
      <View style={[{
        overflow: 'hidden',
        height: this.props.cropHeight,
        width: this.props.cropWidth,
        backgroundColor: 'transparent'
        }, this.props.style]}>
        <Image style={{
          position: 'absolute',
          top: this.props.cropTop * -1,
          left: this.props.cropLeft * -1,
          width: this.props.width,
          height: this.props.height
        }}
          source={this.props.source}
          resizeMode={this.props.resizeMode}>
          {this.props.children}
        </Image>
      </View>
    );
  }
});

var animcrop = React.createClass({
  getDefaultProps() {
    return {
      width: 350,
      height: 526
    };
  },
  getInitialState() {
    return {
      width: this.props.width,
      height: this.props.height,
      left: 0,
      top: 0,
      radius: 0,
      cropped: false
    };
  },
  componentDidMount() {
    LayoutAnimation.Presets.spring.duration = 1200;
    LayoutAnimation.spring();
  },
  _zoomIn() {
    this.setState({cropped: false});
    LayoutAnimation.spring();
    this.setState({
      left: 75,
      top: 110,
      width: 190,
      height: 250,
      radius: 50
    });
  },
  _zoomOut() {
    this.setState({cropped: false});
    LayoutAnimation.spring();
    this.setState({
      width: this.props.width,
      height: this.props.height,
      left: 0,
      top: 0,
      radius: 0
    });
  },
  _showCropped() {
    this.setState({
      cropped: true
    });
  },
  _croppedImage() {
    return (
      <CroppedImage
        source={require('image!alien')}
        cropTop={110}
        cropLeft={75}
        cropWidth={190}
        cropHeight={250}
        width={this.props.width}
        height={this.props.height}
        resizeMode="contain" />
    );
  },
  _croppedView() {
    return (
      <View>
        <Image
          source={require('image!alien')}
          style={{
            width: this.props.width,
            height: this.props.height,
            opacity: 0.2,
            position: 'absolute',
            borderWidth: 1,
            borderColor: 'black'
          }}
          resizeMode="contain" />
        <CroppingView
          cropTop={this.state.top}
          cropLeft={this.state.left}
          width={this.state.width}
          height={this.state.height}
          style={{
            borderRadius: this.state.radius
          }}>
          <Image
            source={require('image!alien')}
            style={{
              width: this.props.width,
              height: this.props.height
            }}
            resizeMode="contain" />
        </CroppingView>
      </View>
    );
  },
  render: function() {
    var contents = this.state.cropped ? this._croppedImage() : this._croppedView();
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          paddingBottom: 10
        }}>
          <TouchableOpacity onPress={this._zoomIn}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Zoom In!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._zoomOut}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Zoom Out!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showCropped}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Crop</Text>
            </View>
          </TouchableOpacity>
        </View>
        {contents}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10
  },
  button: {
    marginRight: 10,
    padding: 10,
    fontSize: 10,
    textAlign: 'center',
    backgroundColor: 'green',
    width: 100
  }
});

AppRegistry.registerComponent('animcrop', () => animcrop);
