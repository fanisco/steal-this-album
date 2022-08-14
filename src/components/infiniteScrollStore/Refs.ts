import { MutableRefObject } from "react";

export class Refs {
  public items: MutableRefObject<HTMLElement | null>[] = [];

  public register(ref: MutableRefObject<HTMLElement | null>): number {
    this.items.push(ref);

    return this.items.length - 1;
  }

  public unregister(ref: React.MutableRefObject<HTMLElement | null>) {
    this.items.splice(this.items.indexOf(ref), 1);
  }
}
