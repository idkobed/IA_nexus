import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";


export default function RootLayout() {
  return (
    <>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: "#050510" },
          headerTintColor: "#00ffff",
          drawerStyle: { backgroundColor: "#050510" },
          drawerActiveTintColor: "#00ffff",
          drawerInactiveTintColor: "#fff",
        }}
      >
        {/* MAIN */}
        <Drawer.Screen
          name="(tabs)"
          options={{ title: "NEXUS AI" }}
        />

        {/* BIBLIOTECA */}
        <Drawer.Screen
          name="conceptos/index"
          options={{ title: "BIBLIOTECA" }}

        />
        <Drawer.Screen
          name="quiz"
          options={{ title: "QUIZ" }}
        />

        {/* OCULTOS */}
        <Drawer.Screen
          name="conceptos/hdd"
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />

        <Drawer.Screen
          name="conceptos/ssd"
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />
        <Drawer.Screen
          name="conceptos/nvme"
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />

        <Drawer.Screen
          name="conceptos/comparador"
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />
        <Drawer.Screen
          name="conceptos/fat32"
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />
        <Drawer.Screen
          name="conceptos/ntfs"
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />
        <Drawer.Screen
          name="conceptos/exfat"
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />
        <Drawer.Screen
          name="conceptos/apfs"
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />
        <Drawer.Screen
          name="conceptos/ext4"
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />
        <Drawer.Screen
          name="conceptos/cloud"
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />
        <Drawer.Screen
          name="conceptos/edge"
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />
        <Drawer.Screen
          name="conceptos/raid0"
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />
        <Drawer.Screen
          name="conceptos/raid1"
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />
        <Drawer.Screen
          name="conceptos/raid5"
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />
        <Drawer.Screen
          name="conceptos/raid10"
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />
      </Drawer>

      <StatusBar style="auto" />
    </>

  );
}