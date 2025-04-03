import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export const FLOOR_HEIGHT = 11.3338;
export const NB_FLOORS = 3;

export function Office(props) {
  const { nodes, materials } = useGLTF("./models/3dmodel_room.glb");
  const ref = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    );
  }, []);
  return (
    <group {...props} dispose={null} ref={ref}>
      <group position={[0, 5, -3.867]} scale={[1.406, 1.406, 2.382]}>
        <mesh
          geometry={nodes.Cube030_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube030_2.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Cube030_3.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        geometry={nodes.Bed.geometry}
        material={materials["BedMaterial.002"]}
        position={[-2.402, 2.3, -1]}
        scale={[1.2, 0.2, 2.4]}
      />
      <mesh
        geometry={nodes.Mattress.geometry}
        material={materials["MattressMaterial.002"]}
        position={[-2.402, 2.5, -1]}
        scale={[1.15, 0.15, 2.35]}
      />
      <mesh
        geometry={nodes.Table.geometry}
        material={materials["TableMaterial.002"]}
        position={[-3.648, 3.573, -6.857]}
        scale={[0.75, 0.05, 2.263]}
      />
      <mesh
        geometry={nodes.TableLeg001.geometry}
        material={nodes.TableLeg001.material}
        position={[0.9, 2.1, -1.9]}
        scale={[0.05, 0.5, 0.05]}
      />
      <mesh
        geometry={nodes.TableLeg002.geometry}
        material={nodes.TableLeg002.material}
        position={[2.1, 2.1, -0.1]}
        scale={[0.05, 0.5, 0.05]}
      />
      <mesh
        geometry={nodes.TableLeg003.geometry}
        material={nodes.TableLeg003.material}
        position={[2.1, 2.1, -1.9]}
        scale={[0.05, 0.5, 0.05]}
      />
      <mesh
        geometry={nodes.ChairSeat.geometry}
        material={materials["ChairMaterial.002"]}
        position={[-2.627, 2.724, -7.132]}
        rotation={[0, 1.417, 0]}
        scale={[0.933, 0.112, 0.872]}
      />
      <mesh
        geometry={nodes.ChairLeg.geometry}
        material={nodes.ChairLeg.material}
        position={[1.15, 1.85, 0.65]}
        scale={[0.05, 0.25, 0.05]}
      />
      <mesh
        geometry={nodes.ChairLeg001.geometry}
        material={nodes.ChairLeg001.material}
        position={[1.15, 1.85, -0.05]}
        scale={[0.05, 0.25, 0.05]}
      />
      <mesh
        geometry={nodes.ChairLeg002.geometry}
        material={nodes.ChairLeg002.material}
        position={[1.85, 1.85, 0.65]}
        scale={[0.05, 0.25, 0.05]}
      />
      <mesh
        geometry={nodes.ChairLeg003.geometry}
        material={nodes.ChairLeg003.material}
        position={[1.85, 1.85, -0.05]}
        scale={[0.05, 0.25, 0.05]}
      />
      <mesh
        geometry={nodes.ChairBack.geometry}
        material={materials["ChairMaterial.002"]}
        position={[-2.321, 3.497, -7.115]}
        rotation={[0, 1.417, 0]}
        scale={[0.868, 2.074, 0.052]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[-2.276, 1.471, 2.409]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 43.183, 1.161]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-2.266, 1.471, -4.459]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 43.183, 1.161]}
      />
      <mesh
        geometry={nodes.Bed001.geometry}
        material={materials["BedMaterial.003"]}
        position={[-2.402, 1.708, -1]}
        scale={[1.2, 0.2, 2.4]}
      />
      <mesh
        geometry={nodes.Bed002.geometry}
        material={materials["BedMaterial.004"]}
        position={[-2.402, 1.13, -1]}
        scale={[1.2, 0.2, 2.4]}
      />
      <mesh
        geometry={nodes.ChairBack001.geometry}
        material={materials["ChairMaterial.003"]}
        position={[-2.298, 1.722, -7.373]}
        rotation={[0, 1.417, 0]}
        scale={[0.167, 2.545, 0.047]}
      />
      <mesh
        geometry={nodes.ChairBack002.geometry}
        material={materials["ChairMaterial.004"]}
        position={[-2.899, 1.722, -6.842]}
        rotation={[0, 1.417, 0]}
        scale={[0.167, 2.545, 0.047]}
      />
      <mesh
        geometry={nodes.ChairBack003.geometry}
        material={materials["ChairMaterial.005"]}
        position={[-2.361, 1.722, -6.842]}
        rotation={[0, 1.417, 0]}
        scale={[0.167, 2.545, 0.047]}
      />
      <mesh
        geometry={nodes.ChairBack004.geometry}
        material={materials["ChairMaterial.006"]}
        position={[-2.888, 1.722, -7.432]}
        rotation={[0, 1.417, 0]}
        scale={[0.167, 2.545, 0.047]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials["Material.006"]}
        position={[-3.695, 3.644, -7.181]}
        rotation={[0, -0.28, 0]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials["Material.007"]}
        position={[-3.804, 3.896, -7.197]}
        rotation={[0, -0.28, 0]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials["Material.008"]}
        position={[-3.788, 4.377, -7.199]}
        rotation={[Math.PI / 2, 0, -1.291]}
        scale={[0.991, 0.979, 1]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials["Material.004"]}
        position={[-3.647, 4.383, -7.176]}
        rotation={[Math.PI / 2, 0, -1.291]}
        scale={[0.95, 0.979, 0.992]}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[-4.089, 2.724, -0.993]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 1, 0.347]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[-0.578, 2.724, -0.993]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 1, 0.347]}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials["Material.005"]}
        position={[-2.388, 2.711, -1.549]}
        rotation={[0, 0, -Math.PI]}
        scale={[-2.187, -2.034, -7.426]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials["Material.001"]}
        position={[-2.262, 2.767, 1.94]}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials["Material.009"]}
        position={[-0.094, 10.706, -1.992]}
        rotation={[0, 0, 1.565]}
        scale={[1.483, 4.092, 5.767]}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[1.598, 0.782, 1.347]}
      />
      <mesh
        geometry={nodes.TableLeg004.geometry}
        material={nodes.TableLeg004.material}
        position={[2.1, 13.1, 13.1]}
        scale={[0.05, 0.5, 0.05]}
      />
      <mesh
        geometry={nodes.TableLeg005.geometry}
        material={nodes.TableLeg005.material}
        position={[2.1, 13.1, 14.9]}
        scale={[0.05, 0.5, 0.05]}
      />
      <mesh
        geometry={nodes.TableLeg006.geometry}
        material={nodes.TableLeg006.material}
        position={[0.9, 13.1, 13.1]}
        scale={[0.05, 0.5, 0.05]}
      />
      <mesh
        geometry={nodes.Table001.geometry}
        material={materials["TableMaterial.001"]}
        position={[-3.648, 14.573, 16.143]}
        scale={[0.75, 0.05, 2.263]}
      />
      <group position={[0, 16, 11.133]} scale={[1.406, 1.406, 2.382]}>
        <mesh
          geometry={nodes.Cube006_1.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          geometry={nodes.Cube006_2.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          geometry={nodes.Cube006_3.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[1.598, 11.782, 16.347]}
      />
      <mesh
        geometry={nodes.Cube013.geometry}
        material={materials["Material.014"]}
        position={[-0.094, 21.706, 9.008]}
        rotation={[Math.PI, -0.011, -1.577]}
        scale={[1.483, 4.092, 5.767]}
      />
      <mesh
        geometry={nodes.Cube018.geometry}
        material={materials["Material.017"]}
        position={[-3.654, 15.383, 15.775]}
        rotation={[Math.PI / 2, 0, -1.858]}
        scale={[0.95, 0.979, 0.992]}
      />
      <mesh
        geometry={nodes.Cube019.geometry}
        material={materials["Material.018"]}
        position={[-3.785, 15.377, 15.832]}
        rotation={[Math.PI / 2, 0, -1.858]}
        scale={[0.991, 0.979, 1]}
      />
      <mesh
        geometry={nodes.Cube020.geometry}
        material={materials["Material.019"]}
        position={[-3.797, 14.896, 15.842]}
        rotation={[0, 0.288, 0]}
      />
      <mesh
        geometry={nodes.Cube021.geometry}
        material={materials["Material.020"]}
        position={[-3.697, 14.644, 15.797]}
        rotation={[0, 0.288, 0]}
      />
      <mesh
        geometry={nodes.ChairSeat001.geometry}
        material={materials["ChairMaterial.001"]}
        position={[-2.627, 13.724, 15.868]}
        rotation={[0, 1.417, 0]}
        scale={[0.933, 0.112, 0.872]}
      />
      <mesh
        geometry={nodes.ChairBack005.geometry}
        material={materials["ChairMaterial.007"]}
        position={[-2.888, 12.722, 15.568]}
        rotation={[0, 1.417, 0]}
        scale={[0.167, 2.545, 0.047]}
      />
      <mesh
        geometry={nodes.ChairBack006.geometry}
        material={materials["ChairMaterial.008"]}
        position={[-2.361, 12.722, 16.158]}
        rotation={[0, 1.417, 0]}
        scale={[0.167, 2.545, 0.047]}
      />
      <mesh
        geometry={nodes.ChairBack007.geometry}
        material={materials["ChairMaterial.009"]}
        position={[-2.899, 12.722, 16.158]}
        rotation={[0, 1.417, 0]}
        scale={[0.167, 2.545, 0.047]}
      />
      <mesh
        geometry={nodes.ChairBack008.geometry}
        material={materials["ChairMaterial.010"]}
        position={[-2.298, 12.722, 15.627]}
        rotation={[0, 1.417, 0]}
        scale={[0.167, 2.545, 0.047]}
      />
      <mesh
        geometry={nodes.ChairBack009.geometry}
        material={materials["ChairMaterial.001"]}
        position={[-2.321, 14.497, 15.885]}
        rotation={[0, 1.417, 0]}
        scale={[0.868, 2.074, 0.052]}
      />
      <mesh
        geometry={nodes.TableLeg007.geometry}
        material={nodes.TableLeg007.material}
        position={[2.1, 24.1, -1.9]}
        scale={[0.05, 0.5, 0.05]}
      />
      <mesh
        geometry={nodes.TableLeg008.geometry}
        material={nodes.TableLeg008.material}
        position={[2.1, 24.1, -0.1]}
        scale={[0.05, 0.5, 0.05]}
      />
      <mesh
        geometry={nodes.TableLeg009.geometry}
        material={nodes.TableLeg009.material}
        position={[0.9, 24.1, -1.9]}
        scale={[0.05, 0.5, 0.05]}
      />
      <mesh
        geometry={nodes.Table002.geometry}
        material={materials["TableMaterial.003"]}
        position={[-3.648, 25.573, -6.857]}
        scale={[0.75, 0.05, 2.263]}
      />
      <group position={[0, 27, -3.867]} scale={[1.406, 1.406, 2.382]}>
        <mesh
          geometry={nodes.Cube066.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          geometry={nodes.Cube066_1.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          geometry={nodes.Cube066_2.geometry}
          material={materials["Material.023"]}
        />
      </group>
      <mesh
        geometry={nodes.Mattress002.geometry}
        material={materials["MattressMaterial.003"]}
        position={[-2.402, 24.5, -1]}
        scale={[1.15, 0.15, 2.35]}
      />
      <mesh
        geometry={nodes.Cube024.geometry}
        material={nodes.Cube024.material}
        position={[1.598, 22.782, 1.347]}
      />
      <mesh
        geometry={nodes.Cube025.geometry}
        material={materials["Material.024"]}
        position={[-0.094, 32.706, -1.992]}
        rotation={[0, 0, 1.565]}
        scale={[1.483, 4.092, 5.767]}
      />
      <mesh
        geometry={nodes.Cube026.geometry}
        material={materials["Material.025"]}
        position={[-2.262, 24.767, 1.94]}
      />
      <mesh
        geometry={nodes.Cube027.geometry}
        material={materials["Material.026"]}
        position={[-2.388, 24.711, -1.549]}
        rotation={[0, 0, -Math.PI]}
        scale={[-2.187, -2.034, -7.426]}
      />
      <mesh
        geometry={nodes.Cube028.geometry}
        material={nodes.Cube028.material}
        position={[-0.578, 24.724, -0.993]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 1, 0.347]}
      />
      <mesh
        geometry={nodes.Cube029.geometry}
        material={nodes.Cube029.material}
        position={[-4.089, 24.724, -0.993]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 1, 0.347]}
      />
      <mesh
        geometry={nodes.Cube030.geometry}
        material={materials["Material.027"]}
        position={[-3.647, 26.383, -7.176]}
        rotation={[Math.PI / 2, 0, -1.291]}
        scale={[0.95, 0.979, 0.992]}
      />
      <mesh
        geometry={nodes.Cube031.geometry}
        material={materials["Material.028"]}
        position={[-3.788, 26.377, -7.199]}
        rotation={[Math.PI / 2, 0, -1.291]}
        scale={[0.991, 0.979, 1]}
      />
      <mesh
        geometry={nodes.Cube032.geometry}
        material={materials["Material.029"]}
        position={[-3.804, 25.896, -7.197]}
        rotation={[0, -0.28, 0]}
      />
      <mesh
        geometry={nodes.Cube033.geometry}
        material={materials["Material.030"]}
        position={[-3.695, 25.644, -7.181]}
        rotation={[0, -0.28, 0]}
      />
      <mesh
        geometry={nodes.Cube034.geometry}
        material={nodes.Cube034.material}
        position={[-2.266, 23.471, -4.459]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 43.183, 1.161]}
      />
      <mesh
        geometry={nodes.Cube035.geometry}
        material={nodes.Cube035.material}
        position={[-2.276, 23.471, 2.409]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 43.183, 1.161]}
      />
      <mesh
        geometry={nodes.ChairSeat002.geometry}
        material={materials["ChairMaterial.011"]}
        position={[-2.627, 24.724, -7.132]}
        rotation={[0, 1.417, 0]}
        scale={[0.933, 0.112, 0.872]}
      />
      <mesh
        geometry={nodes.ChairBack010.geometry}
        material={materials["ChairMaterial.012"]}
        position={[-2.888, 23.722, -7.432]}
        rotation={[0, 1.417, 0]}
        scale={[0.167, 2.545, 0.047]}
      />
      <mesh
        geometry={nodes.ChairBack011.geometry}
        material={materials["ChairMaterial.013"]}
        position={[-2.361, 23.722, -6.842]}
        rotation={[0, 1.417, 0]}
        scale={[0.167, 2.545, 0.047]}
      />
      <mesh
        geometry={nodes.ChairBack012.geometry}
        material={materials["ChairMaterial.014"]}
        position={[-2.899, 23.722, -6.842]}
        rotation={[0, 1.417, 0]}
        scale={[0.167, 2.545, 0.047]}
      />
      <mesh
        geometry={nodes.ChairBack013.geometry}
        material={materials["ChairMaterial.015"]}
        position={[-2.298, 23.722, -7.373]}
        rotation={[0, 1.417, 0]}
        scale={[0.167, 2.545, 0.047]}
      />
      <mesh
        geometry={nodes.ChairBack014.geometry}
        material={materials["ChairMaterial.011"]}
        position={[-2.321, 25.497, -7.115]}
        rotation={[0, 1.417, 0]}
        scale={[0.868, 2.074, 0.052]}
      />
      <mesh
        geometry={nodes.Bed006.geometry}
        material={materials["BedMaterial.007"]}
        position={[-2.402, 23.13, -1]}
        scale={[1.2, 0.2, 2.4]}
      />
      <mesh
        geometry={nodes.Bed007.geometry}
        material={materials["BedMaterial.008"]}
        position={[-2.402, 23.708, -1]}
        scale={[1.2, 0.2, 2.4]}
      />
      <mesh
        geometry={nodes.Bed008.geometry}
        material={materials["BedMaterial.009"]}
        position={[-2.402, 24.3, -1]}
        scale={[1.2, 0.2, 2.4]}
      />
      <mesh
        geometry={nodes.Mattress001.geometry}
        material={materials["MattressMaterial.004"]}
        position={[-1.288, 13.5, 8.47]}
        rotation={[Math.PI, -0.015, Math.PI]}
        scale={[1.15, 0.15, 2.35]}
      />
      <mesh
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[-1.465, 12.471, 5.063]}
        rotation={[Math.PI / 2, 0, 1.556]}
        scale={[1, 43.183, 1.161]}
      />
      <mesh
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[-1.371, 12.471, 11.931]}
        rotation={[Math.PI / 2, 0, 1.556]}
        scale={[1, 43.183, 1.161]}
      />
      <mesh
        geometry={nodes.Cube016.geometry}
        material={nodes.Cube016.material}
        position={[0.399, 13.724, 8.438]}
        rotation={[Math.PI / 2, 0, 1.556]}
        scale={[1, 1, 0.347]}
      />
      <mesh
        geometry={nodes.Cube017.geometry}
        material={nodes.Cube017.material}
        position={[-3.111, 13.724, 8.49]}
        rotation={[Math.PI / 2, 0, 1.556]}
        scale={[1, 1, 0.347]}
      />
      <mesh
        geometry={nodes.Cube022.geometry}
        material={materials["Material.031"]}
        position={[-1.293, 13.711, 9.02]}
        rotation={[Math.PI, -0.015, 0]}
        scale={[-2.187, -2.034, -7.426]}
      />
      <mesh
        geometry={nodes.Cube023.geometry}
        material={materials["Material.032"]}
        position={[-1.471, 13.767, 5.533]}
        rotation={[Math.PI, -0.015, Math.PI]}
      />
      <mesh
        geometry={nodes.Bed003.geometry}
        material={materials["BedMaterial.010"]}
        position={[-1.288, 13.3, 8.47]}
        rotation={[Math.PI, -0.015, Math.PI]}
        scale={[1.2, 0.2, 2.4]}
      />
      <mesh
        geometry={nodes.Bed004.geometry}
        material={materials["BedMaterial.011"]}
        position={[-1.288, 12.708, 8.47]}
        rotation={[Math.PI, -0.015, Math.PI]}
        scale={[1.2, 0.2, 2.4]}
      />
      <mesh
        geometry={nodes.Bed005.geometry}
        material={materials["BedMaterial.012"]}
        position={[-1.288, 12.13, 8.47]}
        rotation={[Math.PI, -0.015, Math.PI]}
        scale={[1.2, 0.2, 2.4]}
      />
    </group>
  );
}

useGLTF.preload("./models/3dmodel_room.glb");
