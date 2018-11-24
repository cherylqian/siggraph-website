import React, { Component } from "react";
const THREE = window.THREE;

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.state.width / this.state.height,
      0.1,
      1000
    );
    this.camera.position.z = 4;
    //ADD LIGHT
    var light = new THREE.PointLight(0xff0000, 1, 100);
    light.position.set(0, 0, 10);
    this.scene.add(light);
    //Test Orbit controls
    // var controls = new THREE.OrbitControls(this.camera);
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(this.state.width, this.state.height);
    this.mount.appendChild(this.renderer.domElement);
    //ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshLambertMaterial({
      color: Math.random() * 0xffffff
    });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    this.start();
  }
  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);

    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight - 100
    });
  };
  componentWillMount = () => {
    this.updateDimensions();
  };
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };
  render() {
    return (
      <div
        id="background"
        style={{ width: this.state.width, height: this.state.height }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default Background;
