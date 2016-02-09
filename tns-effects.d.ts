declare module "ui/core/view" {
    interface View {
        fadeIn(duration?: string): Promise<void>;
        fadeIn(duration?: number): Promise<void>;
        fadeOut(duration?: string): Promise<void>;
        fadeOut(duration?: number): Promise<void>;
        fadeTo(duration?: string, opacity?: number): Promise<void>;
        fadeTo(duration?: number, opacity?: number): Promise<void>;
        fadeToggle(duration?: string): Promise<void>;
        fadeToggle(duration?: number): Promise<void>;
        
        show(duration?: string): Promise<void>;
        show(duration?: number): Promise<void>;
        hide(duration?: string): Promise<void>;
        hide(duration?: number): Promise<void>;
        toggle(duration?: string): Promise<void>;
        toggle(duration?: number): Promise<void>;
        
        slideDown(duration?: string, distance?: number): Promise<void>;
        slideDown(duration?: number, distance?: number): Promise<void>; 
        slideUp(duration?: string, distance?: number): Promise<void>;
        slideUp(duration?: number, distance?: number): Promise<void>;
        slideToggle(duration?: string, distance?: number): Promise<void>;
        slideToggle(duration?: number, distance?: number): Promise<void>;

        spring(duration?: string, animation?:any): Promise<void>;
        spring(duration?: number, animation?:any): Promise<void>;
    }
}
