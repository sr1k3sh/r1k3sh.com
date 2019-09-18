import * as THREE from 'three'
import flatten from 'lodash-es/flatten'
import {
    SVGLoader as loader
} from './SVGLoader'
import './styles.css'

const doubleSide = THREE.DoubleSide
const deg = THREE.Math.degToRad
const colors = ['#21242d', '#804548', '#09384f', '#3e4a3a', '#2d4a3e', '#5c706f']
const svgs = ['night', 'city', 'morning', 'tubes', 'woods', 'beach']
    .map(name => `./svg/${name}.svg`)
    .map(
        url =>
        new Promise(resolve =>
            new loader().load(url, shapes =>
                resolve(flatten(shapes.map((group, index) => group.toShapes(true).map(shape => ({
                    shape,
                    color: group.color,
                    index
                })))))
            )
        )
    )

export {
    svgs,
    colors,
    deg,
    doubleSide
}
