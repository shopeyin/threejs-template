import * as THREE from 'three'
import Sizes from "./utils/Sizes.js"
import Time from "./utils/Time.js"
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './world/World.js'
import Resources from './utils/Resources.js'
import sources from './sources.js'

let instance = null

export default class Experience{

    constructor(canvas){
        // call everything here when component mounts

        //Global access
        if(instance){
            
            return instance
        }
       
        instance = this
        window.experience = this
        console.log('start experience')


        //this.canvas
        this.canvas = canvas


        //Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        //Sizes resize event method
        this.sizes.on('resize', ()=>{
            this.resize() // calling the resize method within the Experience class
        })

        //Time tick event method
        this.time.on('tick', ()=>{
            this.update() // calling the UPDATE method within the Experience class
        })

    }


    resize(){
        this.camera.resize()
        this.renderer.resize()
    }

    update()
    {
        this.camera.update()
        this.renderer.update()
    }
}