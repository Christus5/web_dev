class TV {
    constructor(video_links, screen_content_id){
        this.video_links = video_links.slice();
        this.screen_content = document.getElementById(screen_content_id);
        this.screen_content.src = this.video_links[0];

        this.screen =  document.getElementById('screen');
        this.indicator = document.getElementById('indicator');
        this.current_channel = 0;
        this.power = false;
    }

    power_tv() {
        this.power = !this.power;
        this.screen.style.backgroundColor = this.power ? 'white' : 'black';
        this.indicator.style.backgroundColor = this.power ? 'green' : 'red';
        this.screen_content.style.display = this.power ? 'block' : 'none';
        setTimeout(() => { 
            this.screen_content.style.opacity = this.power ? 1 : 0;
        }, 1000);
    }

    change_channel(increase_by) {
        if(!this.power) { return; }
        this.current_channel += increase_by;
        if (this.current_channel >= this.video_links.length) {
            this.current_channel = 0;
        }
        else if (this.current_channel < 0) {
            this.current_channel = this.video_links.length;
        }
        this.screen_content.src = this.video_links[this.current_channel];

    }
}

const root_link = "https://www.youtube.com/embed/"

const video_links = [
    `${root_link}WatUMbTUMxQ`,
    `${root_link}660p-hPUzu0`,
    `${root_link}7MFKy7DJsCY`,
    `${root_link}cGgcOHAHhGA`,
]

const tv = new TV(video_links, 'screen-content');
