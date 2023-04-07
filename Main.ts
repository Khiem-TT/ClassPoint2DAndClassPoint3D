import {Point2D} from "./Point2D";

let point2D = new Point2D(1, 2);
console.log(point2D);
point2D.setXY(3, 4);
console.log(point2D.getXY());

import {Point3D} from "./Point3D";

let point3D = new Point3D(5, 6, 7);
console.log(point3D);
point3D.setXYZ(8, 9, 10);
console.log(point3D.getXYZ());