---
outline: deep
title: Dumping Firmware & Keys
---

# Dumping Firmware & Keys

## Keys
Keys are required for decrypting most of the file formats used by the Nintendo Switch.

 Keysets are stored as text files. These 2 filenames are automatically read:  
* `prod.keys` - Contains common keys used by all Nintendo Switch devices.
* `title.keys` - Contains game-specific keys.

Ryujinx will first look for keys in `C:\Users\yourname\AppData\Roaming\Ryujinx\system`, Or `\portable\system` on a portable install. To access this directory, go to `File` > `Open Ryujinx folder`, then click on `system`. If Ryujinx doesn't find any keys in those folders, it will look in `$HOME\.switch`.

To dump your `prod.keys` and `title.keys` please follow these steps.
1.	First off [learn how to boot into RCM mode and inject payloads](https://nh-server.github.io/switch-guide/) if you haven't already.
2.	Make sure you have an SD card with the latest release of [Atmosphere](https://github.com/Atmosphere-NX/Atmosphere/releases) inserted into your Nintendo Switch.
3.	Download the latest release of Picklock_RCM/Lockpick_RCM.
4.	Boot into RCM mode.
5.	Inject the `Picklock_RCM`/`Lockpick_RCM.bin` that you have downloaded at `Step 3.` using your preferred payload injector. We recommend [TegraRCMGUI](https://github.com/eliboa/TegraRcmGUI/releases) as it is easy to use and has a decent feature set.
6.	Using the `Vol+/-` buttons to navigate and the `Power` button to select, select `Dump from SysNAND | Key generation: X` ("X" depends on your Nintendo Switch's firmware version).
7.	The dumping process may take a while depending on how many titles you have installed.
8.	After its completion, press any button to return to the main menu of Picklock_RCM/Lockpick_RCM.
9.	Navigate to and select `Power off` if you have an SD card reader. Or you could Navigate and select `Reboot (RCM)` if you want to mount your SD card using `TegraRCMGUI > Tools > Memloader V3 > MMC - SD Card`.
10.	You can find your keys in `sd:/switch/prod.keys` and `sd:/switch/title.keys` respectively.
11. Copy these files and paste them in your Ryujinx `system` folder.
And you're done!

### Title keys

These are only used for games that are not dumped from cartridges but from games downloaded from the Nintendo eShop. These are also only used if the eShop dump does *not* have a `ticket`. If the game does have a ticket, Ryujinx will read the key directly from that ticket.

Title keys are stored in the format `rights_id = key`.

For example:

```
01000000000100000000000000000003 = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
01000000000108000000000000000003 = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
01000000000108000000000000000004 = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### Prod keys

These are typically used to decrypt system files and encrypted game files. These keys get changed in about every major system update, so make sure to keep your keys up-to-date if you want to play newer games!

## Firmware

Thanks to Candy for providing the guide details & images. Loosely based off of [NH Switch Guide](https://nh-server.github.io/switch-guide/extras/updating/#updating-emummc-by-dumping-an-updated-firmware-from-your-sysmmc).

What you will need:
- The latest release of [TegraExplorer](https://github.com/suchmememanyskill/TegraExplorer/releases) (the `.bin` file)
---

1. Make sure your sysMMC is up to date. If your sysMMC is not up to date, update it through System Settings.

2. Boot your Switch into RCM.

3. Using a Payload Injector, such as TegraRcmGUI or fusee-interfacee-tk, inject the TegraExplorer.bin Payload (like you would with Hekate).

![Screenshot 2022-12-03 at 10 45 13 PM](https://user-images.githubusercontent.com/28193374/205474096-25049c51-9659-4122-a4f1-c2fc2eb00a4d.png)

4. Using the joystick and the A buttons, select `FirmwareDump.te`.

![Screenshot_0a75c7c9](https://user-images.githubusercontent.com/28193374/205474107-a103b5e8-6b31-42f2-ba34-a798172931cb.png)

5. Select `Dump sysmmc`.

![Screenshot_0ad4061c](https://user-images.githubusercontent.com/28193374/205474109-8c5fb59c-99c8-42a3-afbb-4da61865335b.png)

6. Wait about 1-2 minutes for the tool to dump your firmware.

![Screenshot_0d9ca2b9](https://user-images.githubusercontent.com/28193374/205474110-14016849-477b-486b-989f-6b713ec9cc74.png)

7. When the tool finishes, press any button.

8. Select `Power off`.

![Screenshot_2dec46de](https://user-images.githubusercontent.com/28193374/205474112-5e6bcb81-a46e-40ff-85df-4edea0f0a66a.png)

9. Remove the SD card from your Switch, and insert it into your PC.

10. A folder containing your firmware should now exist at `/tegraexplorer/Firmware/<version-number>`

![Screenshot 2022-12-03 at 11 09 38 PM](https://user-images.githubusercontent.com/28193374/205474104-0aba8839-aee8-4ad9-bdbe-ac07e390d73a.png)