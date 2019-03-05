import { NgModule } from "@angular/core";
import { CamTriggerCardComponent } from "./cam-trigger-card/cam-trigger-card";
import { TriggerFrequencyComponent } from "./trigger-frequency/trigger-frequency";
import { IonicModule } from "ionic-angular";
import { IrTxComponent } from "./ir-tx/ir-tx";
import { BeMotionComponent } from "./be-motion/be-motion";
import { BeTimerComponent } from "./be-timer/be-timer";
@NgModule({
  declarations: [
    CamTriggerCardComponent,
    TriggerFrequencyComponent,
    IrTxComponent,
    BeMotionComponent,
    BeTimerComponent
  ],
  imports: [IonicModule],
  exports: [
    CamTriggerCardComponent,
    TriggerFrequencyComponent,
    IrTxComponent,
    BeMotionComponent,
    BeTimerComponent
  ]
})
export class ComponentsModule {}
