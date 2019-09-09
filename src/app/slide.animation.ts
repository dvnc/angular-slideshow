import {
  animate,
  group,
  query,
  style,
  transition,
  trigger
} from "@angular/animations";

export const slideAnimation = trigger("slideAnimation", [
  transition(
    "*=>*",
    group([
      query(":enter", [
        style({ opacity: 0, transform: "scale(1)" }),
        animate("2000ms", style({ opacity: 1, transform: "scale(1)" }))
      ]),
      query(":leave", [
        animate("2000ms", style({ opacity: 0, transform: "scale(2)" }))
      ])
    ])
  )
]);
