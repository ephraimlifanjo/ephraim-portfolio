"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3D(){
  const ref = useRef(null);
  useEffect(()=>{
    const host = ref.current;
    if (!host) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50,1,.1,100);
    camera.position.z=4.2;
    const renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
    host.appendChild(renderer.domElement);
    const geo = new THREE.IcosahedronGeometry(1.2,2);
    const mat = new THREE.MeshPhysicalMaterial({color:0x143a66,metalness:.72,roughness:.18,clearcoat:1,clearcoatRoughness:.08,emissive:0x031121});
    const mesh = new THREE.Mesh(geo,mat);
    scene.add(mesh);
    const wire = new THREE.LineSegments(new THREE.WireframeGeometry(geo), new THREE.LineBasicMaterial({color:0x55e7ff,transparent:true,opacity:.35}));
    mesh.add(wire);
    scene.add(new THREE.AmbientLight(0xffffff,1.4));
    const p1=new THREE.PointLight(0x16f2b3,35,12); p1.position.set(2,2,3); scene.add(p1);
    const p2=new THREE.PointLight(0x7c3aed,28,12); p2.position.set(-2,-1,3); scene.add(p2);
    let raf;
    const resize=()=>{ const w=host.clientWidth||440,h=host.clientHeight||440; renderer.setSize(w,h); camera.aspect=w/h; camera.updateProjectionMatrix(); };
    resize(); window.addEventListener("resize",resize);
    const animate=()=>{ mesh.rotation.x+=.0025; mesh.rotation.y+=.004; raf=requestAnimationFrame(animate); renderer.render(scene,camera); };
    animate();
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener("resize",resize); renderer.dispose(); geo.dispose(); mat.dispose(); host.removeChild(renderer.domElement); };
  },[]);
  return <div ref={ref} className="h-[320px] w-full sm:h-[420px]" aria-hidden="true"/>;
}
