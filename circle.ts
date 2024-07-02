class circle {
    private radius: number = 1.0;
    private color: string = "red";

    constructor();
    constructor(radius: number);
    constructor(radius: number, color: string);
    constructor(radius?: number, color?: string) {
        if (radius !== undefined) {
            this.radius = radius;
        }
        if (color !== undefined) {
            this.color = color;
        }
    }

    public getRadius(): number {
        return this.radius;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public toString(): string {
        return circle[`radius=${this.radius}, color=${this.color}`];
    }

    public getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    public getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}