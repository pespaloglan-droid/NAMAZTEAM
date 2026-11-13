package com.namazteam.lux;import android.content.*;public class BootReceiver extends BroadcastReceiver{public void onReceive(Context c,Intent i){PrayerReceiver.schedule(c);}}
