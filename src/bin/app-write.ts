import * as commander from 'commander';
import {Writer} from '../tools/writer';
import {Config} from "../config/Config";

export class Write {

    private program: commander.IExportedCommand;
    private package: any;
    private writer: Writer;
    private config: Config;

    constructor() {
        this.program = commander;
        this.package = require('../../package.json');
    }

    public initialize() {
        this.program
            .version(this.package.version)
            .option('-b, --build [value]', 'What would you like to build')
            .parse(process.argv);

        this.loadConf();

        if (this.program.build === null) {
            this.buildIndexes();
            this.buildSiteMap();
        }

        if (this.program.build === 'sitemap') {
            this.buildSiteMap()
        } else if (this.program.build === 'indexes') {
            this.buildIndexes();
        } else {
            Writer.error(`${this.program.build} is not something I can build`);
            this.program.help();
        }
    }

    protected buildSiteMap() {
        // @todo all
        Writer.info('building sitemap');
    }

    protected buildIndexes() {
        // @todo all
        Writer.info('building indexes');
    }

    private loadConf() {
        let path = process.cwd();
        this.config = require(path+'/angular-seo.json');
    }
}

let app = new Write();
app.initialize();
