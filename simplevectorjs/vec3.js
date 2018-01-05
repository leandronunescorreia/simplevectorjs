"use strict";
class Vec3 {
    constructor(){
        this._x = 0.0;
        this._y = 0.0;
        this._z = 0.0;        
    }
  
    get x() {return this._x;}
    get y() {return this._y;}
    get z(){return this._z;}
    set x(value){this._x = value;}
    set y(value){this._y = value;}
    set z(value){this._z = value;}

    vecToString() {return this._x + ',' +this._y +',' +this._z;}

    setup(u,v,w){
        this._x = u;
        this._y = v;
        this._z = w;
    }

    dot(vec){
        return (this._x + vec.x)+(this._y + vec.y)+(this._z + vec.z);
    }

    add(vec){
        var ret = new Vec3();
        ret.setup((this._x + vec.x),(this._y + vec.y),(this._z + vec.z));
        return ret;
    }

    cross(vec){
        var ret = new Vec3();
        ret.setup(  (this._y * vec.z)-(this._z * vec.y),
                    (this._z * vec.x)-(this._x * vec.z),
                    (this._x * vec.y)-(this._y * vec.x));
        return ret;        
    }
  }

  module.exports = Vec3;