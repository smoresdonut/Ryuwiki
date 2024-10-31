---
outline: deep
title: Setup
---


# Setup & Configuration

If you haven't already hacked your Nitendo Switch you can do so [right here](https://nh-server.github.io/switch-guide/) 

This guide illustrates how to use an untrimmed game cartridge dump (XCI file) to install firmware directly to Ryujinx. If you would prefer to dump the firmware standlone, you may follow [this firmware dumping guide](/dumping#firmware)

If you haven't already downloaded Ryujinx, get the latest version from: https://github.com/GreemDev/Ryujinx/releases/latest

Ryujinx checks for updates automatically at startup. You can disable this feature if you wish in Options > Settings . You may also check for updates manually by navigating to Help > Check for Updates

Thanks to Gab for providing the guide images
## Preface

Ryujinx comes pre-optimized by default. If a particular menu option is not mentioned in this guide, it should be ignored and should not be changed unless directly instructed by Ryujinx staff.

**When requesting support on the Discord Server, you will usually be asked for your log file. With this in mind, Logging should be left at default settings (enabled) for everything except debug logs. Do not enable debug logs unless specifically instructed by Ryujinx staff.**

## System Requirements

In order to use Ryujinx your computer will need:

- At least 8GB RAM

- A video card/GPU that supports OpenGL 4.5/Vulkan 1.2 or higher

- Your prod.keys and either your [dumped firmware](/firmware) or game cartridge untrimmed XCI

- Your dumped Nintendo Switch games or homebrew

- Windows 10.0.17134 or higher / macOS 12 / Any modern linux distribution see [dependencies](#dependencies)

A recommended baseline system (native resolution and framerate) would look something like:

- CPU: Ryzen 5 3600
- RAM: 16GB DDR4
- GPU: NVIDIA GTX 1060 6GB

## Dependencies

**Windows**

- **Windows 10 RS4 (Redstone 4, version 1803) or newer is required.**
- Graphics drivers must be up to date. On laptops with 2 different graphics cards, both iGPU and dGPU drivers must be updated.

**Linux**

copy the command into your terminal emulator of choice and execute it

- Archlinux based distros:
```
sudo pacman -S sdl2 openal
```

- Ubuntu based distros:

```
sudo apt-get install libsdl2-2.0 libsdl2-dev libalut-dev
```

- Fedora: 
```
sudo dnf install SDL2-devel openal-soft
```

**MacOS**
 - macOS 12 Monterey or latest (recommended) installed.

## Placement of Prod.keys

By default Ryujinx will use ```%appdata%/Ryujinx``` (or the equivalent application data folder on Linux/macOS) to store all of it's permanent files. This includes firmware, save files, shader caches and other configuration. If you wish Ryujinx to be fully self-contained you may use [portable mode!](#portablemode)

1. Now that you've downloaded the Ryujinx archive, open it and extract the contents of the publish folder onto your drive in the location of your choice. We recommend against using your desktop or the root of any drive as these can sometimes be protected.

2. Navigate to where you extracted the Ryujinx files, and double-click on Ryujinx.exe. This will launch the emulator and you may be met with a Windows Protected your PC window (don't worry, this is normal!)

3. Click Run anyway on the warning box. Now that Ryujinx has been launched, the proper folders have been created for you in your ```%appdata% folder```

4. Click File at the top left of the Ryujinx window, and then click Open Ryujinx Folder.

![image](/assets/folder.png)

5. Navigate down into the system subfolder and paste your prod.keys file here. The file/folder structure should look like this:

![image](/assets/prodkeys.png)

6. Close and reopen Ryujinx so that the prod.keys file is validated.

You're done installing keys!

## Installation of Firmware

Now that your keys are installed, it's time to install a firmware. Make sure you have an untrimmed XCI file of a recent game cartridge you dumped, or have compiled your [dumped firmware](/firmware) into a ZIP file.

1. Open Ryujinx. There should be no warning about KEYS anymore; if you still get the warning, go back through the prod.keys steps and ensure you have placed the file correctly.

2. Now that Ryujinx is open, click **Tools > Install Firmware > Install from XCI/ZIP**

![image](/assets/380515276-8c993f94-7620-4188-93cf-a29aff951070.png)

3. This will bring up your OS's File Explorer, navigate to the location of your dumped XCI file and click Open. You will be asked to confirm whether you want to install the firmware. Make sure your prod.keys are at least as new as the firmware you are installing!
(Your firmware version number may vary)

![image](/assets/380515801-344502bc-c409-4f10-92a0-ea45ba01e045.png)

4. Click Yes. You will see a message that the firmware is installing and was successfully installed:

![image](/assets/380515923-d0079dce-b65e-44a5-bd9e-632055433b2b.png)

5. Click OK. If all went well, you will now see your firmware version listed as the "System Version" in the bottom right hand corner of the main Ryujinx window.

![image](/assets/380515978-5a037460-b039-434a-8897-8102cc138e9c.png)

## Adding Games

You have keys and firmware ready to go. Time to add your games!

With Ryujinx open, click on **Options > Settings.** This takes you straight to the User Interface tab.

![image](/assets/380516044-69cda4d4-c9c6-4608-bc17-dc31bc8051ae.png)

There are two different methods in which you can add a Game Directory in this window.

**1st Method:**
Type the absolute path of the folder containing your games into the path field and click Add.

![image](/assets/380516087-8a35b38f-a077-491e-9753-805d43dd0bf3.png)

**2nd Method:**
Without typing anything into the path field, click Add.

![image](/assets/380516112-ac87e4db-e1f1-4d95-bb3c-763b5b20d769.png)


This brings up your OS's navigation window. Navigate to the folder containing your games (e.g. D:\Switch Games) and click Add.

![image](/assets/380516163-3eef0f83-e447-4e50-bf4c-ddbe8f07d90c.png)



1. Whichever method you chose, click Save to save the game directory setting.

2. Your games will now show up in the main Ryujinx window.

![image](/assets/380516184-17de16e0-1370-48a9-a6ef-605c598f13be.png)

## Managing Game Updates

Manage game update versions from within Ryujinx

Now that your games are added, you may wish to update your game for various reasons e.g. bugfixes, new content, etc. Ryujinx has built-in functionality to manage which version of the game you want to play.

## Autoadd Game Updates

Since version 1.2.0, Ryujinx supports automatically adding and assigning game updates.

1.  Go to **Options > Settings**

![image](/assets/380516575-cae3284c-5807-4e32-b813-efd107c581ba.png)

2.  Scroll down until you see **"Autoadd DLC/Game Updates"**.

![image](/assets/380516673-3cc9ed12-32ce-440e-84b9-7f554cf9fdfc.png)

From there, simply add the directories where your Game Updates are located by following Method 1 or Method 2 from [Adding Games](#adding-games).

If you add multiple updates in one go with this method, Ryujinx will automatically choose the highest version.

## Managing Game Updates

1.  In the main Ryujinx game list, right-click the game you want to manage Game Updates for.
    Then click **Manage Title Updates**.

![image](/assets/380516935-b1cb84de-41aa-4658-a21c-d1d97e72914c.png)

After clicking Manage Title Updates, you will see the Ryujinx -
    Title Update Manager menu.

If you want to add a game update file, go to step 2.

If you **do not** want to add a game update file, go to step 4.

2.  Click **Add**

![image](/assets/380517078-00806fa9-3c7d-4c12-b870-f78425777b21.png)

3.  This will bring up your OS's File Explorer. 
    From there, navigate to the location of your game's update files,
    select which one you want to Add and click on **Open**.

![image](/assets/380517150-f09cead4-8556-4438-947c-6e73d8f10ccb.png)

You may repeat this for any other game update files you want to add.

4.  Select the version of the update you want to 
    be applied by clicking on it and click **Save**.

![image](/assets/380517208-2ecc3b78-78fd-44fd-abea-67016f9ec3ab.png)

Your game update should now be applied, 
you may repeat the process for any other 
games you wish to apply updates to.

## Managing DLC

Manage Downloadable Content for your games

Now that your games and game updates are added, 
you may wish to add DLC to your game. 
Ryujinx has built-in functionality to manage your DLC.

### Autoadd DLC

Since 1.2.0, Ryujinx supports automatically adding and assigning DLC.

1.  Go to **Options > Settings**

![image](/assets/380517488-15a1307f-eaa6-460b-b75c-b54923268777.png)

2.  Scroll down until you see **"Autoadd DLC/Game Updates"**.

![image](/assets/380516673-3cc9ed12-32ce-440e-84b9-7f554cf9fdfc.png)

From there, simply add the directories where your Game Updates 
are located by following Method 1 or Method 2 from 
[Adding Games](#adding-games).

If you add multiple DLCs in one go with this method, 
Ryujinx will automatically enable every DLC for each game.

### Managing DLC

Managing Downloadable Content includes, 
removing, adding and selecting which DLC you want.

1. In the main Ryujinx game list, 
right-click the game you want to manage 
Game Updates for. Then click **Manage DLC**.

![image](/assets/380517709-9aa885b5-bc6b-45bf-9f30-52246cb4ef88.png)

If you want to add a game update file, go to step 2.

If you **do not** want to add a game update file, go to step 4.

2.  Click **Add**

![image](/assets/380518093-f839795f-d1a5-40f1-bbdb-e964a0c9bc63.png)

3. This will bring up your OS's File Explorer. 
From there, navigate to the location of your DLC files, 
select which ones you want to Add and click on **Open**.

![image](/assets/380517868-5d8476b5-4de2-4407-a338-f60f14540fce.png)
You may repeat this for any other DLC files you want to add.

4.  Select which DLC you want to be applied by clicking on it and click **Save**.

![image](/assets/380517942-b354d3de-fde6-4626-bfe2-58e6977fd73a.png)

Repeat this process, if you wish, for any other games you would like to manage DLC for.

Your DLC should now be applied and enabled automatically.

## Managing Mods

Quick Start Guide for managing mods

Various game mods are available from enthusiasts & content creators online. Ryujinx supports the following types of mods:
1. ExeFS Partition Replacement
2. ExeFS File Replacement
3. ExeFS Patching
4. RomFS Partition Replacement
5. RomFS File Replacement

### Using the Mod Manager

Ryujinx has a built-in **Mod Manager** that can 
very easily be used to enable, disable, add and remove mods.

1. Right-click on the game you want to 
add a mod for, from there click on **Manage Mods**.

![image](/assets/380518396-3af95069-d3d0-4903-b9bd-dec9523ac5eb.png)

2. The **Mod Manager** window will pop-up, 
this is where you can add, remove, enable and 
disable your mods for the game of your choice.

![image](/assets/380518607-91b3b479-5db0-4c27-9920-68b9d0f31737.png)

3. To add Mods, simply click the **Add** button.

![image](/assets/380518675-ae590e65-3cce-4c63-8af5-50d6c34df6e8.png)

4. This will bring up your OS's File explorer. 
From there select the **unzipped** folder 
containing all the files for the mod you want to add.

![image](/assets/380518785-5fa56993-9a62-44dd-938c-f078842e57c2.png)

Your mods should now be installed and already enabled by default.

![image](/assets/380518826-7aec7658-eb06-4a83-bdd4-f68b6c0cf2b0.png)

5. Click **Save** to exit and save your mods.

![image](/assets/380518916-a3eb943a-a613-435e-95fb-ebe14d4e294b.png)

### Manually Adding Mods

**(NOT RECOMMENDED)**

**This is only recommended for experienced users who know what they are doing.**

1. Right-click on the game you wish to add mods for and click **Open Mods Directory**.

![image](/assets/380519117-d90a9f35-d7ca-478e-ab88-5e148697cde3.png)

This will open the `AppData\Roaming\Ryujinx\mods\contents\<game ID>\` folder.

2. Create a subfolder with a name that fits 
the mod you'll be using. Then, place the ExeFS 
and RomFS of the mod inside that folder.

![image](/assets/380519204-109dcc30-20bb-4809-aba2-f1c4566750bf.png)

You can also place mods in 
`C:\Users\[redacted]\AppData\Roaming\Ryujinx\sdcard\atmosphere` 
if the mod was packaged for real hardware 
(usually indicated with an "atmosphere" folder as the top directory).

Right-click the game you wish to add an atmosphere mod 
to and click on **Open Atmosphere Mods Directory**. 
This will open `AppData\Roaming\Ryujinx\sdcard\atmosphere\contents\<game ID>` 
where you can then place the RomFS and ExeFS of the mod you wish to add.

![image](/assets/380519598-eb114e43-77fb-46d1-9355-1c5bbec9b605.png)

![image](/assets/380519639-3c6212c7-2462-4650-bcb8-20e04a5ed220.png)

## Managing Cheats

Ryujinx fully supports Atmosphere style cheats (except game pausing/resume): [Atmosphere's cheats doc](https://github.com/Atmosphere-NX/Atmosphere/blob/master/docs/features/cheats.md)

### Installation of Atmosphere Cheats

A good place to acquire Atmosphere cheats is:

- [EdiZon](https://github.com/WerWolv/EdiZon_CheatsConfigsAndScripts/tree/master/Cheats) (general switch cheats)

Inside the cheat `zip`, `rar`, or other archive format, there is usually a file structure like this:

```
Cheat_Name\cheats\0123456789ABCDEF.txt
```

Where `0123456789ABCDEF` will vary according to the game and the cheat (this is the build id of the executable the cheat attaches itself to). A cheat can also contain several `txt` files. **Cheats are game-specific and version-specific, they will not work if transferred from one game to another or to an incompatible update of the game.**

To install the cheat: 

1.  Open Ryujinx, right-click the game you wish to 
install the cheat and select to open its `Mod directory`.

![image](/assets/380519883-935cc4f3-55b9-4b40-818d-ad58e35f636d.png)

2.  A directory like this will open: `Ryujinx\mods\contents\XXXXXXXXXXXXXXXX\`, 
    `XXXXXXXXXXXXXXXX` will be the id of the chosen game.

![image](/assets/380519946-2ac1fb9a-de79-4475-8e57-659a4bbd05bc.png)

3. Extract the cheat archive to the mod directory, keeping the cheat name: `Ryujinx\mods\contents\XXXXXXXXXXXXXXXX\Cheat_Name\cheats\<all the txt files>`.
The following image may be a bit confusing to look at, 
but take your time it's actually quite easy to understand.

![image](/assets/380519994-11a57587-4bec-4f60-8f8b-9e04990229f5.png)

## Activating/Deactivating cheats

In Ryujinx, cheats are all automatically disabled, so you need to enable them in the Ryujinx UI to be able to use them.

To do so, start by right-clicking a game and clicking on **"Manage Cheats"**

![image](/assets/380520125-1c69981c-7954-4357-866e-6c29ca5bb24f.png)

This will bring up Ryujinx's *Cheat Manager*, from where you can enable/disable cheats by checking the box next to their name.

![image](/assets/380520155-6623bcf0-7b32-4f60-bc72-ac80777a0db6.png)

Next, click **Save** to save which cheats you enabled/disabled.

## Managing User Profiles

Ryujinx offers the ability to use multiple, customizable user profiles. **WARNING:** Save data is specific to each user profile so if you delete a profile, the save data under that profile is also deleted.

### To edit a user profile:  
1. With Ryujinx open, but no game running, click on Options > Manage User Profiles

![image](/assets/380520218-75689cb0-a05f-4483-872d-a966bd2300dd.png)

Now in the Manage User Profiles window, you will see the default RyuPlayer profile. This is the default profile that comes with Ryujinx and **cannot be deleted** as it contains all of the original save data for your games. You may, however, rename it and change the picture to something else, if you like.

![image](/assets/380520232-598a9b0c-bd1a-42c0-a690-b20e2bcbb7ae.png)

2. To rename a profile,  hover over the profile and click the editing icon.

![image](/assets/380520262-c03df82a-9030-4cd4-9448-fba3e14757c4.png)

You can then edit the name of the profile.

![image](/assets/380520282-9076842e-7ffc-4982-8877-715c69a998ac.png)

3. To change the profile image, hover over the profile and click the editing icon again.

Then, click on "Change Profile Image".

![image](/assets/380520411-bbaf17ab-db77-4b91-94c7-f3134b51e0f5.png)

You will then be prompted to select from either a custom image, or from one of the many avatars provided in the firmware.

![image](/assets/380520436-3f9c0a6f-4dbf-49e3-80ad-626b1501210a.png)

If you choose to import an image: supported formats are `png`, `bmp`, and `jpg`. You can use the image you want, but it will be resized to 256x256 pixels, so using a square image is recommended.

If you choose to use a built-in firmware avatar, click on **Select Firmware Avatar**  

In the Manage Accounts - Avatar window, select the avatar you want, and choose a background color. When finished, click **Choose** to make it the profile's image.
![image](/assets/380520521-079f6a7c-9899-4f89-80f8-9d0e923ffffa.png)

![image](/assets/380520544-c0ce5fee-4d7c-4d10-b60d-07abb13b4383.png)

### Add a new profile:

1. With Ryujinx open, but no game running, click on Options > Manage User Profiles  
![image](/assets/380520558-83b608be-6421-4cda-b011-cf2b0067e8e6.png)

2. Click on the Plus sign next to the already existing Profile.

![image](/assets/380520596-61c33bae-c15d-4dc3-84ec-42b5620125aa.png)

3. A window will pop up asking you to name the new Profile. Enter the desired name of the new profile, and click OK.  

To set a profile picture, just click on Set Profile Image and follow Step 3 from the user profile editing instructions above.

![image](/assets/380520698-1aa8bba9-70c9-45a8-91ee-869a61fd0d50.png)

![image](/assets/380520719-efc1f938-c3ca-4666-93d1-fa140689bd61.png)

## Input Configuration

Setting up your controls: this part requires close attention, so read
carefully!

1. Plug in the controller(s) that you will be using.

2. Open *Ryujinx* and navigate to *Options \> Settings*\
![image](/assets/380520760-e38d323d-cb8f-4c6e-9e87-db026586c788.png)

3. You will now see the Ryujinx - Settings window. Click on the
Input tab.\
![image](/assets/380520771-208282ce-853a-4301-ba68-b9353590bf81.png)

Enable Docked Mode: checking this box emulates the Nintendo Switch being docked. 
Docked Mode enables higher resolution, higher FPS, and better graphical fidelity on games that support these features.
**If you check this box, you will need to click configure under Player 1.**
**If you leave this box unchecked, you will need to click configure under Handheld.**

Direct Keyboard Access: checking this box emulates a real, 
physical keyboard being directly connected to a Nintendo Switch via USB. 
**Do not check this box unless you have a specific reason.**

Direct Mouse Access: checking this box emulates a real, 
physical mouse being directly connected to a Nintendo Switch via USB. 
**Do not check this box unless you have a specific reason.**

![image](/assets/380520836-cd6e5df4-ec39-4afb-8bd4-89e5e261e494.png)

4. If you have checked Docked Mode, select Player 1 under the "Player" Dropdown. 
If you have unchecked Docked Mode, select Handheld under the "Player" Dropdown.

![image](/assets/380520868-3d26182b-79c8-4b10-aa94-9ed962d7ddb6.png)

5. Click on the Input Device dropdown and choose the controller you want. 
If you have connected multiple controllers, 
choose the one you want to be configured to be P1 in game. 
**If you do not see any Xinput controllers in the list, 
you will need to use an Xinput wrapper/translator such as** [x360ce](https://www.x360ce.com/).

![image](/assets/380520943-7bd09992-e8f6-41ce-abdc-94c7abf6426e.png)

6.  After selecting your controller you should now see a full mapping UI.

![image](/assets/380520995-ab654318-16cc-4d3f-9627-b34891d15793.png)

 You may continue tweaking the settings to your liking, or binding
each button from scratch if you want a fully custom button layout.\
**NOTE: while the default *Deadzones* are 0.10, we recommend
increasing your *Deadzones* to at least 0.20 in order to avoid
unwanted joystick drift.**

If you are in *Docked Mode* and have additional controllers to
configure, configure them now under Player 2, Player 3, and so on.

7.  ***Click Apply and then OK to save your configuration.***

## Motion Controls

Ryujinx offers the ability to **natively** use motion controls with 
motion-enabled controllers such as a Switch Pro Controller, DS4, DS5, DSE and others.

### Native motion controls

Native motion controls should already be enabled and working by default. 
If you want to change the sensitivity and deadzone, you can do so in the **Settings**.

![image](/assets/380521242-42a52f4f-bd3b-4ecd-8fa7-9da429cb755a.png)

Then, go to the **Input** tab, make sure the box next to **"Motion"** is checked and click **Configure**.

![image](/assets/380521329-0a088973-3e84-477a-bfa1-df5a232954d4.png)

You will now see the *Motion Controls Settings*. 
From here, feel free to modify the sensitivity and deadzone. 
**Since you are natively using motion, you do not need to touch any cemuhook related settings.**

![image](/assets/380521337-81a5c48a-2aa6-46fb-b61b-dbaf52d4952c.png)

Make sure to click on **Save** to save your configuration.

### Cemuhook motion controls

Since Ryujinx uses SDL2 as it's input wrapper, 
it means that not all controllers are supported, 
and that not all the features of a controller are supported. 
Meaning that sometimes, a controller that has motion controls may not be **natively** supported by Ryujinx.

Cemuhook is also needed to use a joycon pair, since it can group 2 controllers under 1.

To fix this, we can use cemuhook:

1. Launch & configure your favorite cemuhook server application (Betterjoy, DS4Windows,etc.) with your Bluetooth or wired motion-capable controller. Leave the application running.

2.  In Ryujinx, navigate to **Options > Settings > Input** tab and select which controller you are configuring. **Remember: if you are in docked mode, configure Player 1. If you are in Handheld mode, configure the Handheld controller.**

![image](/assets/380521420-3b2c5985-b868-4271-8fbb-d5e960688e88.png)

3. Select your motion controller from the dropdown. It will be listed as **"Xinput controller"**, **"Xbox 360 Controller"** or **"Xbox One Controller"**.

![image](/assets/380521432-750f1d6a-fdab-4977-9df7-8aa19cc2a8b4.png)

4.  Next up, make sure **Motion** is activated, and click **Configure** to bring up the *Motion Controls Settings*.

![image](/assets/380521487-c41823bb-b52d-4245-a979-9b092377432f.png)

5.  Once here, check the box named **Use CemuHook compatible motion**, then enter the IP and Port that your cemuhook application uses (usually 127.0.0.1 and 26760).

![image](/assets/380521527-455efa58-efda-45ac-95d3-0b3d6be6e2d1.png)

If you set your controller type to Joycon Pair, an option called "Mirror Input" becomes available. This is useful for games in which both Joycons are connected to a Joycon grip and are moving together. If you enable this checkbox, the first Joycon's motion will be used for both Joycons.

6.  Click **Save** to save your configurations.

Repeat steps 2 through 5 for any other motion controllers you wish to configure. If you have more than one, make sure to choose the respective slot # for each controller

## Amiibo Emulation

All Amiibo are able to be virtually scanned within the emulator, as long as you are actively connected to the internet. No files or dumps are required!

**To scan an Amiibo:**
1. While playing a game that supports Amiibo, either navigate to the area where Amiibo scanning is expected, or press/hold the correct button to enable the Amiibo scan prompt (this site has a basic list of supported games and what benefits are provided by each: https://amiibo.life/games 

2. Click the "Actions" menu header, then click "Scan an Amiibo"

![image](/assets/380521584-0962c14f-3cae-4a2d-b891-2bcf37b57034.png)

3. Choose the Amiibo you want from the Amiibo Series and Character dropdowns. Note: only the Amiibo that have content for the game you are currently playing are shown in this window. All the same, if you'd like to see all Amiibo you may check the box that says "Show All Amiibo".
    
![image](/assets/380521605-059518fb-2e1b-4f57-beea-9fbecb6a0a33.png)

**Addendum:** In The Legend of Zelda: Breath of the Wild, you may continually scan Amiibo as many times as you wish by checking the box labeled "Hack: Use Random Tag Uuid" box.

## Profiled Persistent Translation Cache

Speed up game loading times with PPTC

In a nutshell, this feature caches translated functions so that they do
not need to be translated every time the game loads. This results in a
significant reduction of load times (the amount of time between
launching a game and arriving at the title screen) for nearly every
game.

**NOTE: You must launch the game at least twice and let it load** **to the title screen or beyond before performance improvements are**
**unlocked on the third launch! These improvements are permanent and do** **not require any extra launches going forward.**

PPTC (Profiled Persistent Translation Cache) is now enabled by default. To disable it:

1.  With *Ryujinx* open, click on *Options \> Settings*

![image](/assets/380521629-e950981a-c157-44a9-a356-5bcb06d34f63.png)

2.  Then navigate to the CPU tab and uncheck the box marked "PPTC (Profiled Persistent Translation Cache)"

![image](/assets/380521648-b1e077fa-6b09-4325-8802-b7da6bf90459.png)

From time to time you may wish to examine or purge your PPTC cache files if you are experiencing PPTC-related issues.

To open the PPTC cache file location:
1.  With Ryujinx open, right-click the game in the game list whose PPTC cache files you wish to view. This will bring up a pop-up menu.

2.  Navigate to _Cache Management_ > _Open the PPTC directory_

![image](/assets/380521659-51bc27ae-d1a0-4749-8ed5-a25bc680f7d9.png)

To purge the PPTC cache files:
1.  With Ryujinx open, right-click the game in the game list whose PPTC cache files you wish to purge. This will bring up a pop-up menu.

2.  Navigate to _Cache Management_ > _Open PPTC Directory_

![image](/assets/380521659-51bc27ae-d1a0-4749-8ed5-a25bc680f7d9.png)

3.  You can then select the folders and delete them.

![image](/assets/380521806-dad02a8f-4494-4959-8208-d0bbad0bfe56.png)

## Graphics Enhancements

Ryujinx offers a few graphics enhancement options.

1. _Resolution Scaling_, which offers a much sharper image with little to no impact to performance. Resolution scaling can increase image quality much more noticeably than Anisotropic Filtering. Ryujinx's resolution scaling implementation allows native, 2x, 3x, 4x, or even custom ratios for upscaling.

2. Anisotropic Filtering, which can visibly improve graphic quality.
[Wikipedia says](https://en.wikipedia.org/wiki/Anisotropic_filtering):
In layman\'s terms, anisotropic filtering retains the \"sharpness\" of
a texture normally lost by MIP map texture\'s attempts to avoid
aliasing. Anisotropic filtering can therefore be said to maintain crisp
texture detail at all viewing orientations while providing fast
anti-aliased texture filtering.

3. _Shader Cache_, which stores onto disk the shaders that have already been compiled, negating the need to compile them again. This feature is highly sought after as it significantly reduces stuttering and FPS drops on subsequent plays of a particular game making for a smoother, more enjoyable gameplay experience. **Note: Shader Cache is enabled by default.**

4. _Aspect Ratio Options_, which allow you to adjust the width-to-height ratio to your liking. **Note: these options may give your game a stretched or squeezed appearance unless you are using mods that change the expected aspect ratio of the game.**

**To enable Resolution Scaling:**

**Note: Enabling this feature may cause graphical glitches on some games.**\
**These settings may be changed in-game on the fly! On a standard 1080p display, 2x resolution scaling is recommended.**

1. With *Ryujinx* open, click *Options \> Settings*

![image](/assets/380521629-e950981a-c157-44a9-a356-5bcb06d34f63.png)

2. Navigate to the *Graphics* tab and click the dropdown next to Resolution Scale. Select your desired level of resolution scaling.

![image](/assets/380521848-f9cb6e7b-f4e5-4d6e-892c-905d974f49ad.png)

**Click Apply and then OK to save the enhancement setting.**

**To enable _Anisotropic Filtering_:**

**Note: enabling this feature may cause graphical glitches on some**
**games.**

1.  With Ryujinx open, click on *Options \> Settings*

![image](/assets/380521629-e950981a-c157-44a9-a356-5bcb06d34f63.png)

2.  Navigate to the *Graphics* tab and click the dropdown next to
    *Anisotropic Filtering*. Set it to your desired level.

![image](/assets/380521825-f977e0a5-dc04-4e9a-ae33-302bba847b36.png)

**Click Apply and then *OK* to save the settings.**

**To Manage _Shader Cache_:**  
**Shader Cache is enabled by default**. There are no good reasons to disable it other than for testing purposes. 

Disabling this setting is strongly discouraged. However, if you absolutely must disable it:
1. With Ryujinx open, navigate to _Options > Settings_.

2. Navigate to the Graphics tab and disable shader cache by unchecking the box marked "Enable Shader Cache"

In some rare cases, a shader cache might become corrupted and crash when compiling shaders on boot. To solve this you'll have to purge the shader cache for that particular game:

Right click on a game in the game list and navigate to Cache Management > Purge Shader Cache.

![image](/assets/380521931-3b4a0d31-910f-4b8d-8079-db2e13de8a9a.png)

To view the shader cache directory for a particular game:

Right click on a game in the game list and navigate to Cache Management > Open Shader Cache Directory.

![image](/assets/380521970-1f89e0e2-bbe0-4669-bb38-39538f5d8aaf.png)

To adjust your aspect ratio:  

**Option 1:**
- With Ryujinx open, navigate to Options > Settings and click on the Graphics tab. Click on the Aspect Ratio dropdown and adjust the ratio to your liking.

![image](/assets/380522024-928ea39b-0f22-44fc-96b6-3e6124b289cc.png)

**Option 2:**  
- With your game running, click on the aspect ratio button in the status toolbar at the bottom of the Ryujinx window.

![image](/assets/380522041-e7072a03-5b27-497f-a489-329349accefe.png)

**Option 3 (NOT RECOMMENDED):**
1. Use Option 1 and select "Stretch to Fit Window" or Option 2 and select "Stretched".

2. Simply click and drag your window borders to the size you want!

## Portable Mode

If you wish, you may use a custom folder location for all Ryujinx data (as opposed to keeping it in its default location: %appdata%). This is done via the command-line or, more conveniently, a custom shortcut. In the future, the ability to configure custom data folders may be added to the GUI.

**NOTE: You must manually create the custom folder first before using portable mode! After enabling portable mode, you will need to copy your prod.keys file and any desired game data/save data from its original location to the new data folder.**

To enable Portable Mode

**Option 1: (Recommended)** Create a "portable" subfolder
1. Create a subfolder in the Ryujinx program base directory called "portable". This automatically enables portable mode and utilizes this "portable" folder for system folder contents (keys, firmware, PPTC/shader caches, etc.).

![image](/assets/380522137-6c3b0716-3fb1-436d-9903-dc094af63ece.png)

**Option 2:** Command-line
1. Open a command prompt, navigate to the location of the Ryujinx executable and type the following command: ryujinx.exe -r d:\[folderpath]. For example, if your custom folder was d:\ryujinxdata, your command would be the following, without quotes (THIS IS ONLY AN EXAMPLE. USE WHATEVER CUSTOM FOLDER NAME YOU PREFER):
"ryujinx.exe -r d:\ryujinxdata"

![image](/assets/380522160-74e4da85-78b9-4290-9783-455cd0803bd3.png)

The command prompt window will become the console window when Ryujinx launches.

**Option 3:** Custom Shortcut

1. Right-click on your Ryujinx executable and click Send To -> Desktop Shortcut

![image](/assets/380522214-923822f1-bc59-40f4-85c1-872420dcfd87.png)

2. Locate the new shortcut on your desktop and right-click on it, then click Properties

![image](/assets/380522228-4ebbc374-2334-4cfd-be12-09e0dc322e96.png)

3. In the Properties window, click into the Target field and add a space onto the end of the existing command. Then add "-r [folderpath]" without quotes where [folderpath] is your own custom data folder full path, and click OK. For example, if your custom data folder was d:\ryujinxdata, the addition you would paste into the target field would be "-r d:\ryujinxdata" without the quotes.

![image](/assets/380522240-d68766e3-19c5-481c-82fd-bff86128fe15.png)

Note: On MacOS, the command would be as follows, without the quotes:
"/Applications/Ryujinx.app/Contents/MacOS/Ryujinx -r /path/to/custom/ryujinx/folder"

You can now use this shortcut any time you want to launch Ryujinx in portable mode!

## Launch in Fullscreen

Ryujinx can automatically launch games in fullscreen mode. You can enable this functionality in one of two ways:

**Method One:** In Ryujinx, click on Options, then check the box marked "Start Games in Fullscreen Mode".

![image](/assets/380522251-4e24d314-8b3e-4689-b7e1-2a896f1d5f1f.png)


**Method Two:** If you launch Ryujinx from the commandline, add a --fullscreen option. Like so:

![image](/assets/380522258-efe26e20-b8af-4433-91de-bae98433dacd.png)
